import { css } from "@emotion/core";
import React from "react";

import { theme } from "../../theme/theme";
import { Typography } from "../Typography";

const subtitleBlock = css`
  position: relative;
  height: 40px;
  display: flex;
  align-items: center;
`;

const brownBlock = css`
  background-color: ${theme.colors.burlyWood.high};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 150px;
  z-index:0;

  /* @media (max-width: ${theme.breakpoints.xl}) {
    display: none;
  } */
`;

const textCss = css`
  position: relative;
  z-index: 1;
  margin-left: 65px;
`;

interface IProps {
  text: string;
}

export const Subtitle: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <div css={subtitleBlock} {...rest}>
      <div css={brownBlock} />
      <Typography text={text} css={textCss} />
    </div>
  );
};
