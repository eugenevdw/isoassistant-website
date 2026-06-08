import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-compliance-software"].metadata;

export default function ISOComplianceSoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-compliance-software"]} />;
}
