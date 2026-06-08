import type { Metadata } from "next";
import type { SeoLandingPageContent } from "../components/sections/SeoLandingPage";

interface SeoLandingPageDefinition extends SeoLandingPageContent {
  slug: string;
  linkLabel: string;
  metadata: Metadata;
}

export const seoLandingPages = {
  "iso-9001-software": {
    slug: "iso-9001-software",
    linkLabel: "ISO 9001 software",
    metadata: {
      title: "ISO 9001 Software for Small Businesses | ISO Assistant",
      description:
        "ISO Assistant helps SMEs manage ISO 9001 documents, NCRs, objectives, training, calibration, maintenance and audit evidence."
    },
    eyebrow: "ISO 9001 software",
    h1: "ISO 9001 software for practical quality management",
    intro:
      "ISO Assistant helps small businesses maintain the everyday records behind a quality management system: incidents, non-conformances, objectives, training, controlled documents, calibration, maintenance and audit evidence.",
    primaryFocus: "Keep ISO 9001 work out of scattered spreadsheets",
    primaryCopy:
      "Many small teams implement ISO 9001 and then struggle to keep the system current. ISO Assistant gives quality managers and business owners one place to manage actions, records and reminders as normal work happens.",
    recordsTitle: "Manage the quality records auditors ask for",
    records: [
      "Incidents, corrective actions and follow-up",
      "NCRs, non-conformances and root cause analysis",
      "SOPs, work instructions and controlled documents",
      "Objectives, training records, calibration and maintenance evidence"
    ],
    standardsNote:
      "ISO Assistant does not guarantee ISO 9001 certification. It helps organise the management-system records and actions your organisation needs to control as part of its own implementation."
  },
  "iso-13485-software": {
    slug: "iso-13485-software",
    linkLabel: "ISO 13485 software",
    metadata: {
      title: "ISO 13485 Software for Medical Device Suppliers | ISO Assistant",
      description:
        "ISO Assistant helps medical device suppliers manage controlled documents, training, NCRs, calibration, maintenance and audit evidence."
    },
    eyebrow: "ISO 13485 software",
    h1: "ISO 13485 software for practical quality-system control",
    intro:
      "ISO Assistant helps medical-device-related suppliers and SMEs keep quality-system records under control, including document control, training, NCRs, traceable records, calibration, maintenance and audit readiness.",
    primaryFocus: "Control the quality records that need traceability",
    primaryCopy:
      "ISO 13485 environments need disciplined records, current instructions and clear follow-up. ISO Assistant supports practical quality-system maintenance where your process needs controlled documents, training evidence and operational registers.",
    recordsTitle: "Support quality-system control",
    records: [
      "SOPs, work instructions and revision history",
      "Training records linked to current procedures",
      "NCRs, incidents, corrective actions and follow-up",
      "Calibration, maintenance and audit evidence"
    ],
    standardsNote:
      "ISO Assistant does not imply regulatory approval or certification. It helps manage records and workflows that may support an ISO 13485 quality system, depending on your organisation's requirements."
  },
  "iso-14001-software": {
    slug: "iso-14001-software",
    linkLabel: "ISO 14001 software",
    metadata: {
      title: "ISO 14001 Software for SMEs | ISO Assistant",
      description:
        "ISO Assistant helps SMEs manage ISO 14001 documents, actions, risks, objectives, training, incidents and audit evidence."
    },
    eyebrow: "ISO 14001 software",
    h1: "ISO 14001 software for practical environmental management",
    intro:
      "ISO Assistant helps SMEs maintain the everyday records behind an environmental management system, including controlled documents, objectives, risks, incidents, actions, training and audit evidence.",
    primaryFocus: "Keep environmental management records in one place",
    primaryCopy:
      "ISO 14001 work needs clear evidence that environmental risks, objectives, incidents, actions and responsibilities are being managed. ISO Assistant keeps those records visible instead of scattered across spreadsheets and folders.",
    recordsTitle: "Manage practical ISO 14001 evidence",
    records: [
      "Environmental objectives, risks and opportunities",
      "Incidents, corrective actions and follow-up",
      "Controlled procedures and work instructions",
      "Training records, audit evidence and management review actions"
    ],
    standardsNote:
      "ISO Assistant supports practical ISO 14001 management-system maintenance. Certification depends on your organisation's environmental controls, implementation and audit outcome."
  },
  "iso-45001-software": {
    slug: "iso-45001-software",
    linkLabel: "ISO 45001 software",
    metadata: {
      title: "ISO 45001 Software for SMEs | ISO Assistant",
      description:
        "ISO Assistant helps SMEs manage ISO 45001 incidents, actions, risks, documents, training, maintenance and audit evidence."
    },
    eyebrow: "ISO 45001 software",
    h1: "ISO 45001 software for practical health and safety management",
    intro:
      "ISO Assistant helps SMEs maintain the day-to-day records behind an occupational health and safety management system, including incidents, actions, risks, training, documents, maintenance and audit evidence.",
    primaryFocus: "Keep safety actions and evidence under control",
    primaryCopy:
      "ISO 45001 work depends on clear follow-up, current procedures, training evidence and risk records. ISO Assistant helps teams manage those records without relying on disconnected spreadsheets.",
    recordsTitle: "Manage practical ISO 45001 records",
    records: [
      "Incidents, corrective actions and overdue follow-up",
      "OH&S risks, opportunities and objectives",
      "Controlled procedures and training records",
      "Maintenance records, audit evidence and review actions"
    ],
    standardsNote:
      "ISO Assistant supports practical ISO 45001 management-system maintenance. It helps organise records and actions, but certification depends on your organisation's controls, implementation and audit outcome."
  },
  "ims-software": {
    slug: "ims-software",
    linkLabel: "IMS software",
    metadata: {
      title: "IMS Software for ISO 9001, 14001 and 45001 | ISO Assistant",
      description:
        "ISO Assistant helps SMEs run an IMS combining ISO 9001, ISO 14001 and ISO 45001 records, actions, documents and audits."
    },
    eyebrow: "IMS software",
    h1: "IMS software for ISO 9001, ISO 14001 and ISO 45001",
    intro:
      "ISO Assistant supports integrated management systems that combine ISO 9001, ISO 14001 and ISO 45001, giving SMEs one place to manage shared documents, actions, risks, objectives, training and audit evidence.",
    primaryFocus: "Run shared management-system work once",
    primaryCopy:
      "An IMS is easier to maintain when common workflows are shared instead of duplicated. ISO Assistant helps teams manage documents, actions, audits, reviews, risks and evidence across quality, environmental and OH&S requirements.",
    recordsTitle: "Manage shared IMS records",
    records: [
      "Controlled documents and work instructions",
      "Incidents, NCRs, corrective actions and follow-up",
      "Quality, environmental and OH&S risks and objectives",
      "Training records, audits, reviews and evidence"
    ],
    standardsNote:
      "ISO Assistant supports IMS maintenance for organisations combining ISO 9001, ISO 14001 and ISO 45001. The exact requirements still depend on your organisation's scope, processes and audit outcome."
  },
  "iso-compliance-software": {
    slug: "iso-compliance-software",
    linkLabel: "ISO compliance software",
    metadata: {
      title: "ISO Compliance Software for SMEs | ISO Assistant",
      description:
        "Simple ISO compliance software for SMEs maintaining documents, incidents, NCRs, risks, training, calibration and audit evidence."
    },
    eyebrow: "ISO compliance software",
    h1: "Simple ISO compliance software for growing businesses",
    intro:
      "ISO Assistant is built for SMEs that already have, or are building, an ISO management system and need a practical way to keep records, actions, documents and audit evidence current.",
    primaryFocus: "Maintain the system after implementation",
    primaryCopy:
      "ISO compliance work does not stop after policies are written. Incidents need follow-up, NCRs need action, training needs evidence and documents need control. ISO Assistant brings that routine work into one place.",
    recordsTitle: "Manage recurring ISO compliance records",
    records: [
      "Incidents, NCRs and corrective actions",
      "Document control for SOPs and work instructions",
      "Training, objectives, risks and opportunities",
      "Calibration, maintenance and audit-readiness evidence"
    ],
    standardsNote:
      "ISO Assistant supports ISO compliance work by helping you maintain records and evidence. It does not guarantee certification or replace the need to understand the requirements that apply to your organisation."
  },
  "iso-document-control-software": {
    slug: "iso-document-control-software",
    linkLabel: "ISO document control software",
    metadata: {
      title: "ISO Document Control Software | ISO Assistant",
      description:
        "ISO document control software for SOPs, work instructions, approvals, revision control and audit-ready evidence."
    },
    eyebrow: "ISO document control software",
    h1: "ISO document control software without spreadsheet chaos",
    intro:
      "ISO Assistant helps small businesses manage controlled SOPs and work instructions alongside the incidents, training records, actions and evidence that show the system is being maintained.",
    primaryFocus: "Keep documents controlled and connected to daily work",
    primaryCopy:
      "Document control is more than saving files in a shared folder. ISO Assistant supports numbering, revisions, approvals and PDF export for controlled documents, then keeps related records close to the work.",
    recordsTitle: "Control documents and supporting evidence",
    records: [
      "SOPs and work instructions",
      "Draft, review, approval and revision workflows",
      "Training evidence linked to current procedures",
      "Audit-ready records for actions, incidents and NCRs"
    ],
    standardsNote:
      "ISO Assistant helps manage document control activities common to many ISO standards. Your organisation remains responsible for deciding which documents, approvals and records are required."
  },
  "iso-software-small-business": {
    slug: "iso-software-small-business",
    linkLabel: "ISO software for small businesses",
    metadata: {
      title: "ISO Software for Small Businesses | ISO Assistant",
      description:
        "Practical ISO software for small businesses managing documents, NCRs, incidents, risks, training, calibration and audit evidence."
    },
    eyebrow: "ISO software for small businesses",
    h1: "ISO software built for small businesses",
    intro:
      "ISO Assistant gives small businesses a practical way to maintain an ISO management system without turning daily quality, compliance or operations work into a maze of spreadsheets.",
    primaryFocus: "Simple enough for SMEs to keep using",
    primaryCopy:
      "Most small businesses do not fail because they lack another policy. They struggle because incidents, actions, training records and reminders end up spread across spreadsheets, email and forgotten folders. ISO Assistant brings those daily records into one place.",
    recordsTitle: "Run the records that keep the system alive",
    records: [
      "Incidents, NCRs and corrective actions",
      "SOPs, work instructions and training records",
      "Objectives, risks, opportunities and audit evidence",
      "Calibration, maintenance and operational follow-up"
    ],
    standardsNote:
      "ISO Assistant is independent ISO management software for practical maintenance. It supports ISO 9001, ISO 14001, ISO 45001, ISO 13485, and integrated management systems that combine ISO 9001, ISO 14001 and ISO 45001. Certification depends on your organisation's implementation and audit outcome."
  }
} satisfies Record<string, SeoLandingPageDefinition>;

export type SeoLandingPageSlug = keyof typeof seoLandingPages;

export const seoLandingPageLinks = Object.values(seoLandingPages).map((page) => ({
  href: `/${page.slug}`,
  label: page.linkLabel
}));
