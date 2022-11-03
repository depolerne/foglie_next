import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { IImage, imageFromJson, imageQueryFields } from "../core/models";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IMember {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  image: IImage;
}

function memberFromJson(json: any, lang: TLanguage): IMember {
  const lng = capitalize(lang);
  return {
    id: json.id.toString(),
    firstName: json[`firstName${lng}`],
    lastName: json[`lastName${lng}`],
    position: json[`position${lng}`],
    image: imageFromJson(json.image),
  };
}

interface IMemberService {
  getManyQuery: (lang: TLanguage) => string;
  getMany: (query: string, lang: TLanguage) => Promise<IMember[]>;
}

export const MemberService: IMemberService = {
  getManyQuery: (lang) => {
    const lng = capitalize(lang);
    return `
      {
        members {
          id
          firstName${lng}
          lastName${lng}
          position${lng}
          image {
            ${imageQueryFields}
          }
        }
      }
    `;
  },
  getMany: async (query, lang) => {
    const res = await request<{ members: IMember[] }>(GRAPHQL_BASE_URL, query);
    return res.members.map((j) => memberFromJson(j, lang));
  },
};
