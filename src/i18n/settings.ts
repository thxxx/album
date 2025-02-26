export const defaultLocale = "en";
export const locales = ["en", "ko"] as const;
export type ValidLocale = (typeof locales)[number];

export const translations = {
  en: {
    landing: {
      hero: {
        title: "",
        desc1: "",
        desc2: "",
        desc3: "",
      },
      sec1: {
        title: "",
        desc: "",
      },
      sec2: {
        title: "",
        desc: "",
      },
      sec3: {
        title: "",
        desc: "",
      },
      sec4: {
        title: "",
        desc: "",
      },
      free: {
        title: "",
        desc: "",
        btntext: "",
      },
      modal: {
        desc1: "",
        desc2: "",
      },
    },
  },
  ko: {
    landing: {
      hero: {
        title: "",
        desc1: "",
        desc2: "",
        desc3: "",
      },
      sec1: {
        title: "",
        desc: "",
      },
      sec2: {
        title: "",
        desc: "",
      },
      sec3: {
        title: "",
        desc: "",
      },
      sec4: {
        title: "",
        desc: "",
      },
      free: {
        title: "",
        desc: "",
        btntext: "",
      },
      modal: {
        desc1: "",
        desc2: "",
      },
    },
  },
} as const;
