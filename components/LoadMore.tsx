import { css } from "@emotion/core";

import { theme } from "../theme/theme";
import { Typography } from "./Typography";

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const text = css`
  color: ${theme.colors.burlyWood.high};
  margin-right: 40px;
  font-style: italic;
`;

const line = css`
  width: 52%;
  max-width: 586px;
  height: 0;
  border-top: 1px solid ${theme.colors.burlyWood.high};
  margin-right: 40px;
  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

const button = css`
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
`;

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
}

export const LoadMore: React.FC<IProps> = ({ title, ...rest }) => {
  return (
    <div css={container}>
      <Typography css={text} text={title} font="secondary" />
      <div css={line}></div>
      <button css={button} {...rest}>
        <img src="/static/circle-arrow-brown.svg" alt="Load more icon" />
      </button>
    </div>
  );
};
