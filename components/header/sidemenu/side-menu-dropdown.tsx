import styled from "@emotion/styled";
import { useState } from "react";

import { theme } from "../../../theme/theme";
import { NavLink } from "../nav_link";

const StyledNavDropdown = styled.div<{ isLanguage: boolean }>`
  margin-bottom: 24px;
  align-items: center;
  cursor: pointer;
  z-index: 1;

  text-align: ${(props) => (props.isLanguage ? "right" : "left")};
  display: ${(props) => (props.isLanguage ? "inline-block" : "block")};

  p,
  svg {
    color: ${theme.colors.darkBlue.medium};
    transition: 0.2s color ease-in-out;
  }

  &:active {
    p,
    svg {
      color: ${theme.colors.black};
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  :active {
    p,
    svg {
      color: ${theme.colors.black};
    }
  }
`;

const StyledText = styled(NavLink)`
  margin-right: 3px;
`;

const Menu = styled.nav<{ isOpen: boolean; isLanguage: boolean }>`
  opacity: 0;
  height: 0;
  transition: 0.2s all ease;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  height: ${(props) => (props.isOpen ? "auto" : 0)};
  margin-top: ${(props) => (props.isOpen ? "16px" : 0)};
  display: ${(props) => (props.isLanguage ? "inline-block" : "block")};

  a {
    pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  }
`;

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  isLanguage?: boolean;
}

export const SideMenuDropdown: React.FC<IProps> = ({ title, isLanguage = false, children }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  function toggleMenu(event: any) {
    event.stopPropagation();
    setOpen(!isOpen);
  }

  return (
    <StyledNavDropdown isLanguage={isLanguage}>
      <Title onClick={(e) => toggleMenu(e)}>
        <StyledText>{title}</StyledText>
        <img src="/static/dropdown.svg" alt="Dropdown" />
      </Title>

      <Menu isOpen={isOpen} isLanguage={isLanguage}>
        {children}
      </Menu>
    </StyledNavDropdown>
  );
};
