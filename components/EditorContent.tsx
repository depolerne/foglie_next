import styled from "@emotion/styled";
import React, { useRef } from "react";
import ReactHtmlParser from "react-html-parser";
import Zoom from "react-medium-image-zoom";

import { theme } from "../theme/theme";

const Content = styled.div`
  margin-bottom: 50px;

  p {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${theme.breakpoints.md}) {
      display: block;

      & div {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 1rem;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

interface IProps {
  content: string;
}

const setImageSize = (size: string | undefined): string => {
  if (!size) {
    return "";
  }
  return size.includes("%") ? size : `${size}px`;
};

export const EditorContent: React.FC<IProps> = ({ content }) => {
  const container = useRef(null);
  function transform(node: any) {
    if (node.type === "tag" && node.name === "img") {
      const img = React.createElement("img", {
        src: node.attribs.src,
        alt: "Project photo",
      });

      const width = setImageSize(node.attribs.width);
      const height = setImageSize(node.attribs.height);
      return (
        <Zoom wrapStyle={{ width: width, height: height, float: node.attribs.style ? "right" : "none" }}>{img}</Zoom>
      );
    }
  }
  return <Content ref={container}>{ReactHtmlParser(content, { transform })}</Content>;
};
