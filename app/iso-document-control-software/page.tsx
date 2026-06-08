import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-document-control-software"].metadata;

export default function ISODocumentControlSoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-document-control-software"]} />;
}
