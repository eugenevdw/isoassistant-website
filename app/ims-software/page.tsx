import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["ims-software"].metadata;

export default function IMSSoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["ims-software"]} />;
}
