import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { IImage, imageFromJson, imageQueryFields } from "../core/models";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IAboutCompany {
  title: string;
  text: string;
  image: IImage;
  image1: IImage;
  image2: IImage;
  image3: IImage;
  image4: IImage;
}

interface IAboutCompanyService {
  getOneQuery: (lang: TLanguage, isSubQuery?: boolean) => string;
  getOne: (query: string, lang: TLanguage) => Promise<IAboutCompany>;
  fromJson: (json: any, lang: TLanguage) => IAboutCompany;
}

export const AboutCompanyService: IAboutCompanyService = {
  getOneQuery: (lang, isSubQuery) => {
    const lng = capitalize(lang);
    const query = `
      about {
        title${lng}
        text${lng}
        image {
          ${imageQueryFields}
        }
        image1 {
          ${imageQueryFields}
        }
        image2 {
          ${imageQueryFields}
        }
        image3 {
          ${imageQueryFields}
        }
        image4 {
          ${imageQueryFields}
        }
      }
    `;

    return isSubQuery ? query : `{${query}}`;
  },
  getOne: async (query, lang): Promise<IAboutCompany> => {
    const res = await request<{ about: IAboutCompany }>(GRAPHQL_BASE_URL, query);
    return AboutCompanyService.fromJson(res.about, lang);
  },
  fromJson: (json: any, lang: TLanguage) => {
    const lng = capitalize(lang);

    return {
      title: json[`title${lng}`],
      text: json[`text${lng}`],
      image: imageFromJson(json.image),
      image1: imageFromJson(json.image1),
      image2: imageFromJson(json.image2),
      image3: imageFromJson(json.image3),
      image4: imageFromJson(json.image4),
    };
  },
};
