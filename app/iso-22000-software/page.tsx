import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const metadata = seoLandingPages["iso-22000-software"].metadata;

export default function Iso22000SoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-22000-software"]} />;
}
