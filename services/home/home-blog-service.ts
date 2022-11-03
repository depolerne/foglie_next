import capitalize from "lodash/capitalize";

import { TLanguage } from "../../core/i18n";
import { imageFromJson, imageQueryFields } from "../../core/models";
import { IBlogItem } from "../blog-service";
import { IHomeItemService } from "./home-service";

export interface IHomeBlogItem extends IBlogItem {}

export function homeBlogItemFromJson(json: any, lang: TLanguage): IHomeBlogItem {
  const lng = capitalize(lang);

  return {
    id: json.id,
    title: json[`title${lng}`],
    description: json[`description${lng}`],
    image: imageFromJson(json.image),
  };
}

interface IHomeBlogService extends IHomeItemService {}

export const HomeBlogService: IHomeBlogService = {
  getQuery: (lang) => {
    const lng = capitalize(lang);
    return `
        posts (skip: 0, take: 3) {
            data {
                id
                title${lng}
                description${lng}
                image {
                    ${imageQueryFields}
                }
            }
        }
    `;
  },
};
