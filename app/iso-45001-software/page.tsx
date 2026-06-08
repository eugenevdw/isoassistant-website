import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-45001-software"].metadata;

export default function ISO45001SoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-45001-software"]} />;
}
