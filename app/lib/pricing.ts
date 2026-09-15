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
  "AL", "AM", "AZ", "BA", "BY", "CH", "CZ", "DK", "FO", "GE", "GG", "GI",
  "HU", "IM", "IS", "JE", "LI", "MD", "MK", "NO", "PL", "RO", "RS", "RU",
  "SE", "TR", "UA", "AX",
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
  USD: "Prices shown in US dollars (USD).",
  GBP: "Prices shown in British pounds (GBP).",
  AUD: "Prices shown in Australian dollars (AUD).",
  NZD: "Prices shown in New Zealand dollars (NZD).",
  CAD: "Prices shown in Canadian dollars (CAD)."
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
  countryCode = countryCode?.trim().toUpperCase() ?? null;
  // Match app signup: unknown locations use international USD, not a ZAR guess.
  if (countryCode === "ZA") return buildRegionalPricing("ZAR");
  if (countryCode === "GB") return buildRegionalPricing("GBP");
  if (countryCode === "AU") return buildRegionalPricing("AUD");
  if (countryCode === "NZ") return buildRegionalPricing("NZD");
  if (countryCode === "CA") return buildRegionalPricing("CAD");
  if (countryCode && euroCountryCodes.has(countryCode)) return buildRegionalPricing("EUR");
  return buildRegionalPricing("USD");
}
