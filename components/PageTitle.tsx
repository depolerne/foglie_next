import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";

import { theme } from "../theme/theme";
import { Typography } from "./Typography";

const Wrapper = styled.div`
  margin: 104px 0 32px 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: 64px;
  }
`;

const PageName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Dash = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${theme.colors.brown[200]};
  margin-left: 16px;
`;

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  subtitle: string;
  title: string;
}

export const PageTitle: React.FC<IProps> = ({ subtitle, title, ...rest }) => {
  return (
    <Wrapper {...rest}>
      <PageName>
        <Typography
          text={subtitle}
          css={css`
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1.25px;
            color: ${theme.colors.brown[200]};
          `}
        />

        <Dash />
      </PageName>
      <Typography
        font="secondary"
        variant="h3"
        text={title}
        css={css`
          text-transform: capitalize;
        `}
      />
    </Wrapper>
  );
};
