import styled from "@emotion/styled";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import React from "react";

import { IProjectPreview } from "../../services/projectService";
import { theme } from "../../theme/theme";
import { Img } from "../Img";
import { Typography } from "../Typography";

const Wrapper = styled.a`
  background-color: black;
  height: 440px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: ${theme.colors.white.high};

  img {
    transition: 0.3s transform ease;
  }

  :hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const CategoryText = styled(Typography)`
  text-transform: uppercase;
  position: absolute;
  top: 24px;
  left: 24px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`;

const TitleText = styled(Typography)`
  text-transform: uppercase;
  max-width: 137px;
`;

interface IProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  project: IProjectPreview;
}

export const ProjectsListItem: React.FC<IProps> = ({ project, ...rest }) => {
  const { lang } = useTranslation();

  return (
    <Link
      href={project.noContent ? `/portfolio?imgUrl=${project.image.url}` : "/project/[id]"}
      as={project.noContent ? `/portfolio?imgUrl=${project.image.url}` : `/project/${project.id}`}
      lang={lang}
      passHref
    >
      <Wrapper {...rest}>
        <Img
          data-src={project.image.url}
          alt={project.title}
          style={{ minWidth: "100%", minHeight: "100%", objectFit: "cover" }}
        />

        <CategoryText text={project.category.name} />

        <Bottom>
          <TitleText text={project.title} variant="h5" />
          <img src="/static/more.svg" alt="More icon" />
        </Bottom>
      </Wrapper>
    </Link>
  );
};
