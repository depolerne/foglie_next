import { css } from "@emotion/core";

import { ISliderItem } from "../../services/home/slider-service";
import { theme } from "../../theme/theme";
import { Typography } from "../Typography";
import { ShowGalleryLink } from "./ShowGallaryLink";
import { SliderDescription } from "./SliderDescription";
import { Subtitle } from "./Subtitle";

const container = css`
  position: relative;
  height: 100%;
`;

const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1700px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 50px 0;
  }
`;

const bottomWrapper = css`
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
`;

const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface IProps {
  slider: ISliderItem;
}

export const SliderItem: React.FC<IProps> = ({ slider: { image, title, subtitle, description } }) => {
  return (
    <div css={container}>
      <img css={imageStyle} src={image.url} loading="lazy" alt={title} />
      <div css={overlay}>
        <Subtitle text={subtitle} />

        <div
          css={css`
            max-width: 1100px;
            margin: 20px auto;
            padding: 0 20px;
            width: 100%;
          `}
        >
          <Typography
            text={title}
            variant="h2"
            css={css`
              text-transform: uppercase;
              max-width: 690px;
            `}
          />
        </div>

        <div css={bottomWrapper}>
          <ShowGalleryLink
            css={css`
              @media (max-width: ${theme.breakpoints.md}) {
                display: none;
              }
            `}
          />

          <SliderDescription
            text={description}
            css={css`
              flex: 1;
            `}
          />
        </div>
      </div>
    </div>
  );
};
