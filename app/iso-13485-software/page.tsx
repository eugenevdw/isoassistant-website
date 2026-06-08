import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-13485-software"].metadata;

export default function ISO13485SoftwarePage() {
  return <SeoLandingPage page={seoLandingPages["iso-13485-software"]} />;
}
