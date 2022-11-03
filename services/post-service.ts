import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { imageQueryFields } from "../core/models";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";
import { blogItemFromJson, IBlogItem } from "./blog-service";

export interface IPost extends IBlogItem {
  content: string;
  createdDate: number;
}

export interface IRelatedPost {
  id: string;
  title: string;
  createdDate: number;
}

function postFromJson(json: any, lang: TLanguage): IPost {
  const lng = capitalize(lang);

  return {
    ...blogItemFromJson(json, lang),
    content: json[`content${lng}`],
    createdDate: parseInt(json.createdDate),
  };
}

function relatedPostFromJson(json: any, lang: TLanguage): IRelatedPost {
  const lng = capitalize(lang);

  return {
    id: json.id.toString(),
    title: json[`title${lng}`],
    createdDate: parseInt(json.createdDate),
  };
}

interface IPostService {
  getOneQuery: ({ lang, id }: { lang: TLanguage; id: string }) => string;
  getOne: (query: string, lang: TLanguage) => Promise<IPost>;
  getRelatedPostsQuery: ({ lang, id }: { lang: TLanguage; id: string }) => string;
  getRelatedPosts: (query: string, lang: TLanguage) => Promise<IRelatedPost[]>;
}

export const PostService: IPostService = {
  getOneQuery: ({ lang, id }) => {
    const lng = capitalize(lang);
    return `{
        post (id: ${id}) {
            id
            title${lng}
            description${lng}
            content${lng}
            image {
                ${imageQueryFields}
            }
            createdDate
        }
    }`;
  },
  getOne: async (query, lang) => {
    const res = await request<{ post: IPost }>(GRAPHQL_BASE_URL, query);
    return postFromJson(res.post, lang);
  },
  getRelatedPostsQuery: ({ lang, id }) => {
    const lng = capitalize(lang);
    return `{
        relatedPosts (id: ${id}) {
            id
            title${lng}
            createdDate
        }
    }`;
  },
  getRelatedPosts: async (query, lang) => {
    const res = await request<{ relatedPosts: IRelatedPost[] }>(GRAPHQL_BASE_URL, query);
    return res.relatedPosts.map((json: IRelatedPost) => relatedPostFromJson(json, lang));
  },
};
