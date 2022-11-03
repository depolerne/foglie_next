import { request } from "graphql-request";
import capitalize from "lodash/capitalize";

import { TLanguage } from "../core/i18n";
import { IImage, imageFromJson, imageQueryFields, IPaginatedResponse } from "../core/models";
import { GRAPHQL_BASE_URL } from "../graphql/apollo-client";

export interface IProjectBase {
  id: string;
  title: string;
  image: IImage;
  category: {
    name: string;
  };
}

export interface IProjectPreview extends IProjectBase {
  noContent: boolean;
}

export interface IProjectDetail extends IProjectBase {
  client: string;
  location: string;
  scale: string;
  content: string;
  date: string;
}

function projectBaseFromJson(json: any, lang: TLanguage): IProjectBase {
  const lng = capitalize(lang);

  return {
    id: json.id.toString(),
    title: json[`title${lng}`],
    image: imageFromJson(json.image),
    category: {
      name: json.category[`name${lng}`],
    },
  };
}

export function projectPreviewFromJson(json: any, lang: TLanguage): IProjectPreview {
  return {
    ...projectBaseFromJson(json, lang),
    noContent: json.noContent,
  };
}

function projectDetailFromJson(json: any, lang: TLanguage): IProjectDetail {
  const lng = capitalize(lang);

  return {
    ...projectBaseFromJson(json, lang),
    client: json[`client${lng}`],
    location: json[`location${lng}`],
    scale: json[`scale${lng}`],
    content: json[`content${lng}`],
    date: new Date(json.date).getFullYear().toString(),
  };
}

interface IProjectService {
  getManyQuery: ({
    lang,
    categoryId,
    skip,
    take,
    isSubQuery,
  }: {
    lang: TLanguage;
    categoryId?: string;
    skip: number;
    take: number;
    isSubQuery?: boolean;
  }) => string;
  getMany: (query: string, lang: TLanguage) => Promise<IPaginatedResponse<IProjectPreview>>;
  getOneQuery: (id: string, lang: TLanguage) => string;
  getOne: (query: string, lang: TLanguage) => Promise<IProjectDetail>;
}

export const ProjectService: IProjectService = {
  getManyQuery: ({ lang, categoryId, skip, take, isSubQuery }) => {
    const lng = capitalize(lang);
    const query = `
      projects (skip: ${skip}, take: ${take}, categoryId: "${categoryId ?? ""}") {
        data {
          id
          title${lng}
          image {
            ${imageQueryFields}
          }
          category {
            name${lng}
          }
          noContent
        }
        count
        total
        page
        pageCount
      }
    `;

    return isSubQuery ? query : `{${query}}`;
  },
  getMany: async (query, lang) => {
    const res = await request<{ projects: IPaginatedResponse<IProjectPreview> }>(GRAPHQL_BASE_URL, query);
    return {
      ...res.projects,
      data: res.projects.data.map((j) => projectPreviewFromJson(j, lang)),
    };
  },
  getOneQuery: (id, lang) => {
    const lng = capitalize(lang);
    return `{
      project (id: ${id}) {
        id
        title${lng}
        image {
          ${imageQueryFields}
        }
        category {
          name${lng}
        }
        content${lng}
        scale${lng}
        client${lng}
        location${lng}
        date
      }
    }`;
  },
  getOne: async (query, lang) => {
    const res = await request<{ project: IProjectPreview }>(GRAPHQL_BASE_URL, query);
    return projectDetailFromJson(res.project, lang);
  },
};
