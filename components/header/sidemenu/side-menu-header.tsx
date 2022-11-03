import styled from "@emotion/styled";
import Link from "next-translate/Link";
import React from "react";

import { theme } from "../../../theme/theme";
import { Logo } from "../../Logo";

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const Header = styled.div`
  height: 80px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

// const Logo = styled.a`
//   display: inline-block;
//   width: 93px;
//   height: 24px;

//   @media (min-width: ${theme.breakpoints.xs}) {
//     opacity: 0;
//   }
// `;

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 20px;
`;

export const SideMenuHeader: React.FC<IProps> = ({ onClick }) => {
  return (
    <Header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <CloseButton onClick={onClick}>
        <img src="/static/side-menu-close.svg" alt="Closing side menu icon" />
      </CloseButton>
    </Header>
  );
};
