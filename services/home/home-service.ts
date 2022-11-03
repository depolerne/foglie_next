import { request } from "graphql-request";

import { TLanguage } from "../../core/i18n";
import { IPaginatedResponse } from "../../core/models";
import { GRAPHQL_BASE_URL } from "../../graphql/apollo-client";
import { AboutCompanyService, IAboutCompany } from "../company-service";
import { IPost } from "../post-service";
import { IProjectPreview, projectPreviewFromJson, ProjectService } from "../projectService";
import { homeBlogItemFromJson, HomeBlogService, IHomeBlogItem } from "./home-blog-service";
import { ISliderItem, SliderService } from "./slider-service";

export interface IHome {
  slider: ISliderItem[];
  posts: IHomeBlogItem[];
  about: IAboutCompany;
  projects: IPaginatedResponse<IProjectPreview>;
}

function homeFromJson(data: any, lang: TLanguage): IHome {
  const posts = data.posts.data.map((json: IPost) => homeBlogItemFromJson(json, lang));
  const about = AboutCompanyService.fromJson(data.about, lang);
  const slider = data.slider.map((j: any) => SliderService.fromJson(j, lang));

  return {
    slider,
    about,
    posts,
    projects: { ...data.projects, data: data.projects.data.map((j: any) => projectPreviewFromJson(j, lang)) },
  };
}

export interface IHomeService {
  getQuery: (lang: TLanguage) => string;
  get: (query: string, lang: TLanguage) => Promise<IHome>;
}

export interface IHomeItemService {
  getQuery: (lang: TLanguage) => string;
}

export const HomeService: IHomeService = {
  getQuery: (lang) => {
    const sliderQuery = SliderService.getQuery(lang);
    const aboutQuery = AboutCompanyService.getOneQuery(lang, true);
    const postsQuery = HomeBlogService.getQuery(lang);
    const projectsQuery = ProjectService.getManyQuery({ lang, skip: 0, take: 6, isSubQuery: true });

    return `
      {
        ${sliderQuery}
        ${aboutQuery}
        ${projectsQuery}
        ${postsQuery}
      }
    `;
  },
  get: async (query, lang): Promise<IHome> => {
    const res = await request(GRAPHQL_BASE_URL, query);
    return homeFromJson(res, lang);
  },
};
