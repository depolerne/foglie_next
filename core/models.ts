import { TLanguage } from "./i18n";

export interface IBasicEntity {
  id: string;
  createdDate: string;
  updatedDate: string;
  version: number;
}

export const basicEntityFields = `
  id
  createdDate
  updatedDate
  version
`;

export const basicEntityFromJson = (json: any): IBasicEntity => {
  const e: IBasicEntity = {
    id: json.id.toString(),
    createdDate: json.createdDate.toString(),
    updatedDate: json.updatedDate.toString(),
    version: parseInt(json.version, 10),
  };

  return e;
};

export interface IBaseService<T> {
  getManyQuery: (lang: TLanguage) => string;
  getMany: (query: string) => Promise<T[]>;
  getOneQuery?: (lang: TLanguage) => string;
  getOne?: (query: string) => Promise<T>;
}

export interface ISingleDataService<T> {
  getOneQuery: (lang: TLanguage) => string;
  getOne: (query: string) => Promise<T>;
}

export interface IImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export function imageFromJson(json: any): IImage {
  return {
    id: json.id.toString(),
    url: json.url,
    width: json.width,
    height: json.height,
  };
}

export const imageQueryFields = `
  id
  url
  width
  height
`;

export interface IPaginatedResponse<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}
