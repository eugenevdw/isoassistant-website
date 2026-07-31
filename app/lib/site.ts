export const siteConfig = {
  appUrl: "https://app.isoassistant.com",
  signupUrl: "https://app.isoassistant.com/app/signup?next=%2Fapp",
  email: "info@isoassistant.com",
  phoneDisplay: "+27 (0)83 226 6899",
  phoneHref: "tel:+27832266899",
  pricing: {
    firstStandardDetails: "Your first standard with up to 5 users",
    additionalStandardDetails: "For each additional standard",
    extraSeatDetails: "For each user above the 5 included seats",
    currencies: {
      ZAR: {
        freeTrial: "R0",
        firstStandardMonthly: "R1,200/mo",
        additionalStandardMonthly: "R500/mo",
        extraSeatMonthly: "R200/mo"
      },
      EUR: {
        freeTrial: "€0",
        firstStandardMonthly: "€69/mo",
        additionalStandardMonthly: "€30/mo",
        extraSeatMonthly: "€12/mo"
      },
      USD: {
        freeTrial: "$0",
        firstStandardMonthly: "$79/mo",
        additionalStandardMonthly: "$30/mo",
        extraSeatMonthly: "$13/mo"
      }
    }
  }
} as const;
