import capitalize from "lodash/capitalize";

import { TLanguage } from "../../core/i18n";
import { IImage, imageFromJson, imageQueryFields } from "../../core/models";

export interface ISliderItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: IImage;
}

interface ISliderService {
  getQuery: (lang: TLanguage) => string;
  fromJson: (json: any, lng: TLanguage) => ISliderItem;
}

export const SliderService: ISliderService = {
  getQuery: (lang) => {
    const lng = capitalize(lang);
    return `
      slider {
        id
        title${lng}
        subtitle${lng}
        description${lng}
        image {
          ${imageQueryFields}
        }
      }
    `;
  },
  fromJson: (json: any, lang: TLanguage): ISliderItem => {
    const lng = capitalize(lang);
    return {
      id: json.id.toString(),
      title: json[`title${lng}`] ?? undefined,
      subtitle: json[`subtitle${lng}`],
      description: json[`description${lng}`],
      image: imageFromJson(json.image),
    };
  },
};
