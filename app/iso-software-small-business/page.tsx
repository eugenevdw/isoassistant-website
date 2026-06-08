import { SeoLandingPage } from "../components/sections/SeoLandingPage";
import { seoLandingPages } from "../lib/seoLandingPages";

export const dynamic = "force-static";

export const metadata = seoLandingPages["iso-software-small-business"].metadata;

export default function ISOSoftwareSmallBusinessPage() {
  return <SeoLandingPage page={seoLandingPages["iso-software-small-business"]} />;
}
