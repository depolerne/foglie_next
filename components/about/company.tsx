import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { IAboutCompany } from "../../services/company-service";
import { theme } from "../../theme/theme";
import { PageTitle } from "../PageTitle";

const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;

  @media (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 3;
  background-color: black;

  @media (max-width: ${theme.breakpoints.lg}) {
    height: 305px;
    flex: none;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: relative;
  flex: 4;
  padding: 86px 64px 184px 64px;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding-top: 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 16px 104px;
  }
`;

const Description = styled.div`
  max-width: 640px;

  p:nth-of-type(1) {
    margin-bottom: 30px;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.5px;
  }
`;

const Line = styled.div`
  position: absolute;
  border-top: 1px solid ${theme.colors.burlyWood.high};
  top: 56px;
  width: 75%;
  left: 50%;
  transform: translateX(-55%);

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const Block = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${theme.colors.burlyWood.high};
  position: absolute;
  bottom: 0;
  left: -32px;

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const BackgroundImage = styled.picture`
  position: absolute;
  z-index: -1;
  top: 120px;
  left: -64px;
  bottom: 120px;
  width: 600px;
  max-height: 700px;

  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

interface IProps {
  about: IAboutCompany;
}

export const Company = ({ about }: IProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <ImageWrapper>
        <Image src={about.image.url} alt="About company image" />
      </ImageWrapper>

      <Content>
        <BackgroundImage>
          <source srcSet="/static/about-company-bg.webp" type="image/webp" />
          <source srcSet="/static/about-company-bg.png" type="image/png" />
          <img src="/static/about-company-bg.png" alt="Background image" />
        </BackgroundImage>

        <PageTitle title={about.title} subtitle={t("about:title")} />

        <Description dangerouslySetInnerHTML={{ __html: about.text }} />

        <Block />
      </Content>

      <Line />
    </Container>
  );
};
