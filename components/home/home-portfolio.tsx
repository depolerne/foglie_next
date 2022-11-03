import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { BackgroundImage } from "../BackgroundImage";
import { Container } from "../container";
import { PageTitle } from "../PageTitle";
import { ProjectsList } from "../portfolio/projects-list";

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
`;

const HomePortfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <StyledBackgroundImage>
        <source srcSet="/static/home/portfolio-bg.webp" type="image/webp" />
        <source srcSet="/static/home/portfolio-bg.png" type="image/png" />
        <img src="/static/home/portfolio-bg.png" alt="Background image" />
      </StyledBackgroundImage>
      <Container>
        <PageTitle subtitle={t("portfolio:subtitle")} title={t("portfolio:title")} />
        <ProjectsList />
      </Container>
    </>
  );
};

export default HomePortfolio;
