import styled from "@emotion/styled";

import { theme } from "../../theme/theme";

export const NavLink = styled.a`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  color: ${theme.colors.darkBlue.medium};
  text-decoration: none;
  transition: 0.2s color ease-in-out;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;

  &:hover {
    color: ${theme.colors.black};
  }

  &:focus {
    background-color: transparent;
  }
`;
