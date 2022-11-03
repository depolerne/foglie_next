import styled from "@emotion/styled";

import { theme } from "../../theme/theme";
import { Typography } from "../Typography";
import { menuItemStyle } from "./MenuItem";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}

const StyledNavDropdown = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p,
  svg {
    color: ${theme.colors.darkBlue.medium};
    transition: 0.2s color ease-in-out;
  }

  &:hover {
    nav {
      opacity: 1;
      pointer-events: auto;
    }

    p,
    svg {
      color: ${theme.colors.black};
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  :hover {
    p,
    svg {
      color: ${theme.colors.black};
    }
  }
`;

const StyledText = styled(Typography)`
  ${menuItemStyle}
  margin-right: 3px;
`;

const Menu = styled.nav`
  opacity: 0;
  position: absolute;
  top: calc(50% + 12px);
  transition: 0.2s opacity ease;
  pointer-events: none;
  z-index: 2;
`;

const MenuInner = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${theme.colors.white.high};
  background-color: ${theme.colors.black.low};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding-bottom: 16px;
`;

export const NavDropdown: React.FC<IProps> = ({ title, children, ...rest }) => {
  return (
    <StyledNavDropdown {...rest}>
      <Title>
        <StyledText text={title} />
        <img src="/static/dropdown.svg" alt="Dropdown" />
      </Title>

      <Menu>
        <MenuInner>{children}</MenuInner>
      </Menu>
    </StyledNavDropdown>
  );
};
