import { css } from "@emotion/core";
import React from "react";

import { theme } from "../../theme/theme";
import { Typography } from "../Typography";

const container = css`
  display: flex;
  align-items: center;
`;

const textContainer = css`
  flex: 3;
  display: flex;
  justify-content: flex-end;
`;

const textStyle = css`
  max-width: 240px;
  text-align: right;
  flex: 3;
`;

const line = css`
  height: 1px;
  background-color: ${theme.colors.white.high};
  flex: 2;
  margin-left: 70px;
`;

interface IProps {
  text: string;
}

export const SliderDescription: React.FC<IProps> = ({ text, ...rest }) => {
  return (
    <div css={container} {...rest}>
      <div css={textContainer}>
        <Typography text={text} css={textStyle} />
      </div>
      <div css={line} />
    </div>
  );
};
