import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "../../lib/site";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  website?: string;
  intent?: "enquiry" | "demo";
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Please submit a valid request." }, { status: 400 });
    }
    payload = parsed;
  } catch {
    return NextResponse.json({ error: "Please submit a valid request." }, { status: 400 });
  }
  const isDemo = payload.intent === "demo";

  const name = clean(payload.name);
  const email = clean(payload.email);
  const company = clean(payload.company);
  const message = clean(payload.message);
  const website = clean(payload.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || (!isDemo && !message)) {
    return NextResponse.json(
      { error: isDemo ? "Please complete your name and email address." : "Please complete your name, email address, and message." },
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
          `We could not send your request right now. Please email ${siteConfig.email} or call ${siteConfig.phoneDisplay}.`
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const subject = `ISO Assistant ${isDemo ? "demo request" : "website enquiry"} from ${company || name}`;

  const text = [
    `Request type: ${isDemo ? "Guided demo" : "General enquiry"}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message || "Please contact me to arrange a guided demo."
  ].join("\n");

  try {
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
      message: isDemo ? "Thanks. Your demo request has been sent. We’ll get in touch to arrange a suitable time." : "Thanks. Your message has been sent."
    });
  } catch {
    return NextResponse.json({ error: "We could not send your request right now. Please try again." }, { status: 500 });
  }
}
