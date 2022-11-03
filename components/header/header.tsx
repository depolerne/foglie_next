import styled from "@emotion/styled";
import Link from "next-translate/Link";

import { Container } from "../container";
import Menu from "./menu";

const StyledHeader = styled.header`
  display: flex;
  height: 80px;
  justify-content: space-between;
  z-index: 1;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const Header = () => {
  return (
    <Container style={{ backgroundColor: "#fff" }}>
      <StyledHeader>
        <Link href="/" passHref>
          <Logo>
            <img src="/static/black-logo.svg" alt="Logo" />
          </Logo>
        </Link>

        <Menu />
      </StyledHeader>
    </Container>
  );
};

export default Header;
