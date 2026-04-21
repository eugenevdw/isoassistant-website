import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "../../lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: string | undefined) {
  return value?.trim() ?? "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const message = clean(payload.message);
  const website = clean(payload.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete your name, email address, and message." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FORM_FROM;
  const to = process.env.CONTACT_FORM_TO ?? siteConfig.email;

  if (!apiKey || !from) {
    return NextResponse.json(
      {
        error:
          "The contact form is not configured yet. Set RESEND_API_KEY and CONTACT_FORM_FROM."
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = company
    ? `ISO Assistant website enquiry from ${company}`
    : `ISO Assistant website enquiry from ${name}`;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject,
    text
  });

  if (error) {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thanks. Your message has been sent."
  });
}
