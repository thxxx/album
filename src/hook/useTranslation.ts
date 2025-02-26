// import { useUserStore } from "@/store/useUserState";
// import { translations } from "@/i18n/settings";

// export const useTranslation = () => {
//   const { lang } = useUserStore();
//   const locale = lang || "en";

//   const t = (key: string) => {
//     const keys = key.split(".");
//     let value: any = translations[locale];

//     for (const k of keys) {
//       if (value[k] === undefined) {
//         console.warn(
//           `Translation key "${key}" not found for locale "${locale}"`
//         );
//         return key;
//       }
//       value = value[k];
//     }

//     return value as string;
//   };

//   return { t };
// };
