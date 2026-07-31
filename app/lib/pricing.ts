import { siteConfig } from "./site";

type RequestHeaders = {
  get(name: string): string | null;
};

export type RegionalPricing = {
  freeTrial: string;
  firstStandardMonthly: string;
  additionalStandardMonthly: string;
  extraSeatMonthly: string;
  currencyNotice: string;
};

const euroCountryCodes = new Set([
  "AD",
  "AT",
  "BE",
  "BG",
  "BL",
  "CY",
  "DE",
  "EE",
  "ES",
  "FI",
  "FR",
  "GF",
  "GP",
  "GR",
  "HR",
  "IE",
  "IT",
  "LT",
  "LU",
  "LV",
  "MC",
  "ME",
  "MF",
  "MQ",
  "MT",
  "NL",
  "PM",
  "PT",
  "RE",
  "SI",
  "SK",
  "SM",
  "TF",
  "VA",
  "XK",
  "YT"
]);

const currencyNotices = {
  ZAR: "Prices shown in South African rand (ZAR).",
  EUR: "Prices shown in euros (EUR).",
  USD: "Prices shown in US dollars (USD)."
} as const;

function buildRegionalPricing(currency: keyof typeof siteConfig.pricing.currencies): RegionalPricing {
  return {
    ...siteConfig.pricing.currencies[currency],
    currencyNotice: currencyNotices[currency]
  };
}

export function getCountryCode(requestHeaders: RequestHeaders): string | null {
  const country =
    requestHeaders.get("x-vercel-ip-country") ?? requestHeaders.get("cf-ipcountry");

  if (!country) return null;

  const normalizedCountry = country.trim().toUpperCase();
  return /^[A-Z]{2}$/.test(normalizedCountry) ? normalizedCountry : null;
}

export function getRegionalPricing(countryCode: string | null): RegionalPricing {
  // Preserve the existing ZAR prices when geolocation is unavailable, as it is
  // during local development. Vercel supplies the country code in production.
  if (!countryCode || countryCode === "ZA") return buildRegionalPricing("ZAR");
  if (euroCountryCodes.has(countryCode)) return buildRegionalPricing("EUR");
  return buildRegionalPricing("USD");
}
