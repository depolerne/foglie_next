import styled from "@emotion/styled";
import React from "react";

import { theme } from "../../theme/theme";

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const StyledToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 12px;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

export const ToggleButton: React.FC<IProps> = (props) => {
  return (
    <StyledToggleButton {...props}>
      <img src="/static/side-menu-open.svg" alt="Opening side menu icon" />
    </StyledToggleButton>
  );
};
