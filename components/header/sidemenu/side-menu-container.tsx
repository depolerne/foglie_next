// import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { theme } from "../../../theme/theme";
const WIDTH = 225;

const Backdrop = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background-color: ${theme.colors.darkBlue.disabled};
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 0.3s opacity ease;

  @media (max-width: ${theme.breakpoints.xs}) {
    display: none;
  }
`;

const Menu = styled.aside<{ isOpen: boolean }>`
  width: ${(props) => (props.isOpen ? "auto" : 0)};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  transform: translateX(${(props) => (props.isOpen ? 0 : `${WIDTH}px`)});
  transition: 0.3s transform ease;
  padding: 0 16px 32px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${theme.breakpoints.xs}) {
    left: ${(props) => (props.isOpen ? 0 : "auto")};
    transform: translateX(${(props) => (props.isOpen ? 0 : "100%")});
  }
`;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenuContainer: React.FC<IProps> = ({ onClose, isOpen, children }) => {
  return (
    <>
      <Backdrop onClick={onClose} isOpen={isOpen} />

      <Menu isOpen={isOpen}>{children}</Menu>
    </>
  );
};
