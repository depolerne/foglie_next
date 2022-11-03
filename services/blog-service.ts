import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { IImage, imageFromJson, imageQueryFields, IPaginatedResponse } from "../core/models";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IBlogItem {
  id: string;
  title: string;
  description: string;
  image: IImage;
}

export interface IInstagramImage {
  id: string;
  media_type: string;
  media_url: string;
}

export const blogItemFromJson = (json: any, lang: TLanguage): IBlogItem => {
  const lng = capitalize(lang);
  return {
    id: json.id.toString(),
    title: json[`title${lng}`],
    description: json[`description${lng}`],
    image: imageFromJson(json.image),
  };
};

interface IBlogService {
  getManyQuery: ({ lang, skip, take }: { lang: TLanguage; skip: number; take: number }) => string;
  getMany: (query: string, lang: TLanguage) => Promise<IPaginatedResponse<IBlogItem>>;
  getInstagramImagesQuery: () => string;
  getInstagramImages: (query: string) => Promise<{ instagramImages: IInstagramImage[] }>;
}

export const BlogService: IBlogService = {
  getManyQuery: ({ lang, skip, take }) => {
    const lng = capitalize(lang);
    return `
        {
            posts (skip: ${skip}, take: ${take}) {
                data {
                    id
                    title${lng}
                    description${lng}
                    image {
                        ${imageQueryFields}
                    }
                }
                count
                total
                page
                pageCount
            }
        }
    `;
  },
  getMany: async (query: string, lang: TLanguage) => {
    const res = await request<{ posts: IPaginatedResponse<IBlogItem> }>(GRAPHQL_BASE_URL, query);
    return {
      ...res.posts,
      data: res.posts.data.map((json: IBlogItem) => blogItemFromJson(json, lang)),
    };
  },
  getInstagramImagesQuery: () => {
    return `
        {
            instagramImages {
                id
                media_type
                media_url
            }
        }
    `;
  },
  getInstagramImages: async (query: string) => {
    return await request<{ instagramImages: IInstagramImage[] }>(GRAPHQL_BASE_URL, query);
  },
};
