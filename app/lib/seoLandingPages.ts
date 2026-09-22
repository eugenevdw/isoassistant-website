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
    showDemo: true,
    h1: "Manage ISO 9001 without chasing spreadsheets",
    intro:
      "Keep documents, NCRs, audits and team actions in one place. Give your quality team clear ownership, timely reminders and evidence ready for review.",
    screenshot: {
      src: "/images/product/current/iso-9001-quality-ncr.png",
      alt: "Quality NCR for CNC bore dimensions outside drawing tolerance, showing status, ownership and the reported defect",
      label: "Quality NCR: record the defect, assign responsibility and track the response."
    },
    workflow: {
      title: "Turn a quality defect into a controlled improvement",
      description: "When inspection finds an out-of-tolerance part, keep the investigation and follow-up in the same NCR. This demo follows a machining defect through root cause analysis and changes to the inspection process.",
      steps: [
        "Record the non-conformance and immediate containment, including the affected batch.",
        "Work through the 5 Whys and document the root cause behind the defect.",
        "Link the corrective action to a revised work instruction and operator training.",
        "Record effectiveness checks and review the related risk before closing the NCR."
      ],
      screenshot: {
        src: "/images/product/current/iso-9001-ncr-root-cause.png",
        alt: "NCR 5 Whys analysis with corrective actions linked to work instruction WI-0001 and training record TR-0001",
        aspectRatio: "950 / 820",
        label: "From root cause to work instruction, training and process changes."
      }
    },
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
    showDemo: true,
    h1: "Keep ISO 13485 quality records under control",
    intro:
      "Bring controlled documents, supplier NCRs, training and audit evidence into one workspace. Keep responsibilities clear and follow-up connected for your medical device quality system.",
    screenshot: {
      src: "/images/product/current/iso-13485-supplier-ncr.png",
      alt: "Example supplier NCR for medical device component packs missing the required lot number",
      label: "Illustrative NCR entry: a missing lot identifier on medical device components."
    },
    workflow: {
      title: "Connect supplier non-conformances to competence evidence",
      description: "For medical device suppliers, incoming-material checks, controlled instructions and staff competence need clear records. Capture a lot-identification issue in an NCR, then document the instruction changes and training needed to strengthen receiving checks.",
      steps: [
        "Document supplier non-conformances, affected materials and containment in an NCR.",
        "Keep receiving and inspection instructions under revision and approval control.",
        "Reference the relevant instruction in training records and record attendance and effectiveness.",
        "Maintain calibration, maintenance and audit evidence alongside the quality records."
      ],
      screenshot: {
        src: "/images/product/current/iso-13485-traceability-training.png",
        alt: "Incoming material traceability training with a work instruction reference, completion status and attendance effectiveness",
        aspectRatio: "1214 / 715",
        label: "Manufacturing demo: training on material identification, certificates and purchase requirements."
      }
    },
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
        "Manage ISO 14001 environmental aspects and impacts, significance assessments, operational controls, objectives, incidents and audit evidence."
    },
    eyebrow: "ISO 14001 software",
    showDemo: true,
    h1: "Turn ISO 14001 assessments into clear actions",
    intro:
      "Keep environmental aspects, impacts, controls and objectives in one place. Assign owners, track follow-up and keep the evidence behind your environmental management system connected.",
    screenshot: {
      src: "/images/product/current/iso-14001-environmental-register.png",
      alt: "Environmental aspects and impacts register showing chemical handling and waste activities with baseline risk, residual risk and review dates",
      label: "Environmental register: assess activities, impacts and risk significance."
    },
    workflow: {
      title: "Follow an environmental aspect through to its controls",
      description: "Start with an activity such as storing chemicals. Record the environmental aspect, the potential impact and the controls to manage it, with responsibilities and review dates kept alongside the assessment.",
      steps: [
        "Group aspects by activity, department and category, including emissions, waste, water and resource use.",
        "Record impacts and compliance references, then compare baseline and residual risk significance.",
        "Document operational controls, mitigation and training needs for each assessment.",
        "Filter the register for significant aspects and keep review dates and outstanding controls visible."
      ],
      screenshot: {
        src: "/images/product/current/iso-14001-environmental-assessment.png",
        alt: "Chemical handling assessment showing the environmental impact, compliance references, mitigation and training needs",
        aspectRatio: "945 / 690",
        label: "Chemical handling example: connect the potential impact to practical controls."
      }
    },
    primaryFocus: "Keep environmental management records in one place",
    primaryCopy:
      "Use the dedicated Environmental Aspects & Impacts register to maintain assessments for chemical handling, waste, emissions, energy and water use. Keep the wider environmental system moving with objectives, incident follow-up, controlled procedures and review actions.",
    recordsTitle: "Manage practical ISO 14001 evidence",
    records: [
      "Environmental aspects, impacts and significance assessments",
      "Operational controls, responsibilities and review dates",
      "Environmental objectives, risks and opportunities",
      "Incidents, corrective actions and follow-up",
      "Controlled procedures and work instructions",
      "Training records, audit evidence and management review actions"
    ],
    standardsNote:
      "ISO Assistant supports practical ISO 14001 management-system maintenance. Certification depends on your organisation's environmental controls, implementation and audit outcome."
  },
  "iso-22000-software": {
    slug: "iso-22000-software",
    linkLabel: "ISO 22000 software",
    metadata: {
      title: "ISO 22000 Food Safety Software for SMEs | ISO Assistant",
      description:
        "ISO Assistant helps food businesses manage ISO 22000 documents, food safety incidents, NCRs, risks, training, audits and corrective actions."
    },
    eyebrow: "ISO 22000 software",
    showDemo: true,
    h1: "Keep ISO 22000 food safety records connected",
    intro:
      "Manage food safety incidents, NCRs, documents and training in one workspace. Give corrective actions clear owners and keep audit evidence close to the work.",
    screenshot: {
      src: "/images/product/current/iso-22000-food-safety-ncr.png",
      alt: "Example Food Safety NCR for a finished-product batch with an incorrect allergen declaration",
      label: "Illustrative food safety NCR entry: record an allergen-label issue and containment."
    },
    primaryFocus: "Keep food safety records current and connected",
    primaryCopy:
      "Use Food Safety and HACCP NCR types to record issues such as incorrect allergen labels, document affected batches and containment, and follow root cause analysis through to corrective actions. Keep work instructions, training and effectiveness checks connected to the follow-up.",
    recordsTitle: "Manage practical ISO 22000 evidence",
    records: [
      "Food safety incidents, NCRs and corrective actions",
      "Controlled procedures and work instructions",
      "Risks, opportunities, objectives and assigned tasks",
      "Training records, internal audits and management reviews"
    ],
    standardsNote:
      "ISO Assistant supports practical ISO 22000 management-system maintenance. It helps organise records and actions, but certification and food safety performance depend on your organisation's controls, implementation and audit outcome."
  },
  "iso-45001-software": {
    slug: "iso-45001-software",
    linkLabel: "ISO 45001 software",
    metadata: {
      title: "ISO 45001 Software for SMEs | ISO Assistant",
      description:
        "Manage ISO 45001 hazards, OH&S risk assessments, controls, review dates, safety incidents, training and audit evidence in one workspace."
    },
    eyebrow: "ISO 45001 software",
    showDemo: true,
    h1: "Turn ISO 45001 safety risks into tracked actions",
    intro:
      "Keep hazards, risk assessments, safety incidents and controls in one place. Assign responsibility, follow up on outstanding actions and keep training and audit evidence connected.",
    screenshot: {
      src: "/images/product/current/iso-45001-ohs-risk-register.png",
      alt: "Hazards and OH&S risk register showing vehicle movement, chemical handling, initial and residual risk, review dates and control status",
      label: "Health and safety register: keep hazards, risk ratings and outstanding controls visible."
    },
    workflow: {
      title: "Move from identifying a hazard to implementing controls",
      description: "A vehicle-movement assessment can bring the hazard, people exposed, risk ratings and planned controls together. The dedicated OH&S workflow helps you keep track of what is planned, what is in place and when to review it.",
      steps: [
        "Identify hazards by activity, work area and hazard category, and record who may be exposed.",
        "Assess initial and residual risk using probability, severity and frequency.",
        "Record the hierarchy of controls, implementation status, owners and target dates.",
        "Route assessments for approval, track linked actions and revisit assessments when reviews are due."
      ],
      screenshot: {
        src: "/images/product/current/iso-45001-hazard-assessment.png",
        alt: "Vehicle movement safety assessment showing planned engineering controls, administrative controls, PPE and implementation status",
        aspectRatio: "945 / 710",
        label: "Vehicle movement example: separate planned controls from controls already in place."
      }
    },
    primaryFocus: "Keep safety actions and evidence under control",
    primaryCopy:
      "Use the Hazards & OH&S Risks register to manage workplace assessments and control implementation. Keep incident investigations, corrective actions, worker training and maintenance records available for follow-up and review.",
    recordsTitle: "Manage practical ISO 45001 records",
    records: [
      "Incidents, corrective actions and overdue follow-up",
      "Hazard identification, exposure and OH&S risk assessments",
      "Control implementation, approvals and review dates",
      "OH&S opportunities and objectives",
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
    screenshot: {
      src: "/images/product/current/dashboard-overview.png",
      alt: "ISO Assistant QMS dashboard showing current workload, overdue items and module summaries",
      label: "Shared IMS activity is visible from one dashboard."
    },
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
    screenshot: {
      src: "/images/product/current/audit-detail-evidence-actions.png",
      alt: "ISO Assistant internal audit detail with checklist progress, compliance summary and audit scope",
      label: "Track audit progress, review findings and follow up on assigned actions."
    },
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
    screenshot: {
      src: "/images/product/current/work-instruction-approval-state.png",
      alt: "ISO Assistant work instruction showing approval status and document metadata",
      label: "Controlled documents keep approval state, version and evidence visible."
    },
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
    screenshot: {
      src: "/images/product/current/incident-register-list.png",
      alt: "ISO Assistant incident register with filters and open incident records",
      label: "Small teams can log issues once and keep ownership clear."
    },
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
