export interface IMultiLang {
  az: string;
  en: string;
  ru: string;
}

export function multiLangFromJson(json: any, key: string): IMultiLang {
  return {
    az: json[`${key}Az`] ?? null,
    en: json[`${key}En`] ?? null,
    ru: json[`${key}Ru`] ?? null,
  };
}

export type TLanguage = "az" | "en" | "ru";
