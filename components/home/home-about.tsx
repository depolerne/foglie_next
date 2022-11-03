import { css } from "@emotion/core";
import styled from "@emotion/styled";
import truncate from "lodash/truncate";
import useTranslation from "next-translate/useTranslation";

import { IAboutCompany } from "../../services/company-service";
import { theme } from "../../theme/theme";
import { Container } from "../container";
import { PageTitle } from "../PageTitle";
import ReadMore from "../read-more";

const StyledTitle = styled(PageTitle)`
  margin-top: 0;
  margin-bottom: 24px;
`;

const container = css`
  display: grid;
  grid-template-columns: repeat(5, 250px);
  grid-template-rows: repeat(7, 130px);
  grid-gap: 24px;
  width: 100%;
  margin-top: 104px;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
    padding: 0;
    margin-top: 64px;
  }
`;

const image = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const text = css`
  margin-bottom: 40px;
`;

const textContainer = css`
  grid-column: 1/3;
  grid-row: 1/4;
`;

const imageContainer1 = css`
  grid-column: 1/3;
  grid-row: 4/7;

  img {
    @media (max-width: ${theme.breakpoints.md}) {
      width: 100%;
      margin-top: 40px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const imageContainer2 = css`
  grid-column: 3/4;
  grid-row: 3/5;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const imageContainer3 = css`
  grid-column: 3/5;
  grid-row: 5/8;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const imageContainer4 = css`
  grid-column: 4/6;
  grid-row: 1/5;

  @media (max-width: ${theme.breakpoints.xl}) {
    display: none;
  }
`;

interface IProps {
  about: IAboutCompany;
}

export const HomeAbout: React.FC<IProps> = ({ about }) => {
  const { t, lang } = useTranslation();

  return (
    <Container css={container}>
      <div css={textContainer}>
        <StyledTitle subtitle={t("about:title")} title={about.title} />
        <div css={text} dangerouslySetInnerHTML={{ __html: truncate(about.text, { length: 250, separator: " " }) }} />
        <ReadMore link="/about-company" lang={lang} />
      </div>
      <div css={imageContainer1}>
        <img css={image} src={about.image1.url} alt="First about image" />
      </div>
      <div css={imageContainer2}>
        <img css={image} src={about.image2.url} alt="Second about image" />
      </div>
      <div css={imageContainer3}>
        <img css={image} src={about.image3.url} alt="Third about image" />
      </div>
      <div css={imageContainer4}>
        <img css={image} src={about.image4.url} alt="Fourth about image" />
      </div>
    </Container>
  );
};
