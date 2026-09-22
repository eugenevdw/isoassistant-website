export const siteConfig = {
  appUrl: "https://app.isoassistant.com",
  signupUrl: "https://app.isoassistant.com/app/signup?next=%2Fapp",
  email: "info@isoassistant.com",
  phoneDisplay: "+27 83 226 6899",
  phoneHref: "tel:+27832266899",
  whatsappUrl: "https://wa.me/27832266899?text=Hi%20Eugene%2C%20I%27d%20like%20to%20know%20more%20about%20ISO%20Assistant.",
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
      },
      GBP: {
        freeTrial: "£0", firstStandardMonthly: "£59/mo",
        additionalStandardMonthly: "£22/mo", extraSeatMonthly: "£10/mo"
      },
      AUD: {
        freeTrial: "A$0", firstStandardMonthly: "A$109/mo",
        additionalStandardMonthly: "A$42/mo", extraSeatMonthly: "A$18/mo"
      },
      NZD: {
        freeTrial: "NZ$0", firstStandardMonthly: "NZ$139/mo",
        additionalStandardMonthly: "NZ$52/mo", extraSeatMonthly: "NZ$23/mo"
      },
      CAD: {
        freeTrial: "C$0", firstStandardMonthly: "C$109/mo",
        additionalStandardMonthly: "C$42/mo", extraSeatMonthly: "C$18/mo"
      }
    }
  }
} as const;
