import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { IProjectDetail } from "../../../services/projectService";
import { theme } from "../../../theme/theme";
import { Container } from "../../container";
import { EditorContent } from "../../EditorContent";
import { FacebookLink, InstagramLink, LinkedinLink } from "../../SocialLinks";
import { Typography } from "../../Typography";

const Header = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  margin-top: 112px;
  width: 290px;
  margin-right: 100px;
  text-transform: capitalize;

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 64px;
    margin-bottom: 36px;
  }
`;

const Banner = styled.div`
  flex: 1;
  height: 640px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    height: 320px;
  }
`;

const StyledTitle = styled(Typography)`
  margin-bottom: 16px;
`;

const InfoLabel = styled(Typography)`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Spacer = styled.div`
  width: 20px;
  height: 1px;
`;

interface IProps {
  project: IProjectDetail;
}

const Project: React.FC<IProps> = ({ project }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>
        <Info>
          <StyledTitle variant="h3" text={project.title} />

          <InfoLabel variant="sub2" text={`${t("project:client")}:`} />
          <Typography variant="body2" text={project.client} />

          <InfoLabel variant="sub2" text={`${t("project:location")}:`} />
          <Typography variant="body2" text={project.location} />

          <InfoLabel variant="sub2" text={`${t("project:date")}:`} />
          <Typography variant="body2" text={project.date} />

          <InfoLabel variant="sub2" text={`${t("project:scale")}:`} />
          <Typography variant="body2" text={project.scale} />

          <InfoLabel variant="sub2" text={`${t("project:share")}:`} />
          <Wrapper>
            <FacebookLink />
            <Spacer />
            <InstagramLink />
            <Spacer />
            <LinkedinLink />
          </Wrapper>
        </Info>

        <Banner>
          <img src={project.image.url} alt={project.title} />
        </Banner>
      </Header>

      <EditorContent content={project.content ?? ""} />
    </Container>
  );
};

export default Project;
