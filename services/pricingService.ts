import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IPricing {
  id: string;
  title: string;
}

interface IPricingService {
  getManyQuery: (lang: TLanguage) => string;
  getMany: (query: string, lang: TLanguage) => Promise<IPricing[]>;
  fromJson: (json: any, lang: TLanguage) => IPricing;
}

export const PricingService: IPricingService = {
  getManyQuery: (lang) => {
    const lng = capitalize(lang);
    return `
      {
        pricings {
          id
          title${lng}
        }
      }
    `;
  },
  getMany: async (query, lang) => {
    const res = await request<{ pricings: IPricing[] }>(GRAPHQL_BASE_URL, query);
    return res.pricings.map((j) => PricingService.fromJson(j, lang));
  },
  fromJson: (json, lang) => {
    const lng = capitalize(lang);
    return {
      id: json.id.toString(),
      title: json[`title${lng}`],
    };
  },
};
