import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";
import { default as ErrorComponent } from "next/error";
import React from "react";
import useSWR from "swr";

import { Container } from "../components/container";
import { HomeAbout } from "../components/home/home-about";
import HomeBlog from "../components/home/home-blog";
import HomePortfolio from "../components/home/home-portfolio";
import Layout from "../components/layout";
import { HomeSlider } from "../components/slider/HomeSlider";
import { TLanguage } from "../core/i18n";
import { HomeService, IHome } from "../services/home/home-service";
import { theme } from "../theme/theme";
const container = css`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const spaces = css`
  margin-bottom: 104px;
  max-width: none;
  overflow: hidden;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 64px;
  }
`;

const portfolio = css`
  position: relative;
`;

const squares = css`
  margin: auto;
  width: auto;
  transform: translate(-2px, 3px);

  @media (max-width: ${theme.breakpoints.xl}) {
    display: none;
  }
`;

const blogSquares = css`
  ${squares};
  transform: translate(-2px, -3px);
`;

interface IProps {
  initialData: IHome;
}

const Index: React.FC<IProps> = ({ initialData }) => {
  const { t, lang } = useTranslation();
  const { data, error } = useSWR(HomeService.getQuery(lang), (q) => HomeService.get(q, lang), { initialData });

  if (error) return <ErrorComponent title={error?.message} statusCode={404} />;
  if (!data) return null;

  return (
    <Layout
      description={"Foglie d`alloro. Design company specializing in providing design solutions in Baku and beyond."}
      title={t("home:title")}
    >
      <div css={container}>
        <HomeSlider sliders={data.slider} />
        <Container css={spaces}>
          <HomeAbout about={data.about} />
        </Container>
        <img css={squares} src="/static/home/squares.png" alt="Squares" />
        <div css={portfolio}>
          <HomePortfolio />
        </div>
        <img css={blogSquares} src="/static/home/squares.png" alt="Squares" />
        <div css={spaces}>
          <HomeBlog posts={data.posts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ lang }: { lang: TLanguage }) {
  const initialData = await HomeService.get(HomeService.getQuery(lang), lang);
  return { props: { initialData } };
}

export default Index;
