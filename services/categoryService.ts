import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface ICategory {
  id: string;
  name: string;
  children: ICategory[];
}

export function categoryFromJson(json: any, lang: TLanguage): ICategory {
  const lng = capitalize(lang);

  return {
    id: json.id.toString(),
    name: json[`name${lng}`],
    children: json.children ? json.children.map((j: any) => categoryFromJson(j, lang)) : [],
  };
}

interface ICategoryService {
  getManyQuery: (lang: TLanguage) => string;
  getMany: (query: string, lang: TLanguage) => Promise<ICategory[]>;
}

export const CategoryService: ICategoryService = {
  getManyQuery: (_lang) => {
    const lang = capitalize(_lang);
    return `
      {
        categories {
          id
          name${lang}
          children {
            id
            name${lang}
          }
        }
      }
    `;
  },
  getMany: async (query: string, lang: TLanguage) => {
    const res = await request<{ categories: ICategory[] }>(GRAPHQL_BASE_URL, query);
    return res.categories.map((j) => categoryFromJson(j, lang));
  },
};
