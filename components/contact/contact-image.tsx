import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";

import { theme } from "../../theme/theme";
import { contactBreakPoints } from "./breakpoints";

const container = css`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 29%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${contactBreakPoints[0]}) {
    display: none;
  }
`;

const title = css`
  position: absolute;
  bottom: -50%;
  left: 50%;
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 79px;
  color: ${theme.colors.darkBlue.high};
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  transform: translateX(-100%) rotate(180deg);
`;

const backgroundBlock = css`
  flex: 1;
  background-color: #e5e5e5;
  margin-right: 70px;
`;

const brownBlock = css`
  width: 70px;
  height: 160px;
  position: absolute;
  background-color: ${theme.colors.burlyWood.high};
  bottom: -100px;
  right: 35px;
`;

const aspectRatio = css`
  padding-bottom: 75%;
`;

const imageWrapper = css`
  position: absolute;
  width: 100%;
  top: 64px;
`;

const image = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContactImage = () => {
  const { t } = useTranslation();

  return (
    <div css={container}>
      <div css={backgroundBlock}></div>

      <div css={imageWrapper}>
        <div css={aspectRatio}>
          <picture css={image}>
            <source srcSet="/static/contact.webp" type="image/webp" />
            <source srcSet="/static/contact.png" type="image/png" />
            <img src="/static/contact.png" alt="Contact image" />
          </picture>
        </div>

        <div css={brownBlock}></div>

        <span css={title}>{t("contact:contactUs")}</span>
      </div>
    </div>
  );
};

export default ContactImage;
