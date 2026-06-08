import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-14001-software"].metadata;

export default function ISO14001SoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-14001-software"]} />;
}
