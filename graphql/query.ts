import { request } from "graphql-request";

import { GRAPHQL_BASE_URL } from "./apollo-client";

export const fetcher = <T>(query: string): Promise<T> => request(GRAPHQL_BASE_URL, query);

export const ABOUT_COMPANY_QUERY = `{
    about {
      titleAz
      textAz
    }
}`;

export const SLIDER_QUERY = `{
    slider {
      id
      titleAz
      subtitleAz
      descriptionAz
      image {
        url
      }
    }
}`;

export const BLOG_QUERY = `{
    posts (skip: 0, take: 100) {
      id
      titleAz
      descriptionAz
    }
}`;

export const POST_QUERY = (id: string) => `{
    post (id: ${id}) {
      id
      titleAz
      descriptionAz
    }
}`;
