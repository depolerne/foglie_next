import { css } from "@emotion/core";

import { theme } from "../../theme/theme";

interface IProps {
  index?: number;
  onClick?: () => void;
  active?: boolean;
}

const buttonStyle = css`
  padding: 15px;
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  margin-left: 5px;
`;

const dot = css`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${theme.colors.white.high};
`;

export const SliderDot: React.FC<IProps> = ({ onClick, active }) => {
  return (
    <li>
      <button css={buttonStyle} onClick={onClick} aria-label="Slider dot">
        <span
          css={css`
                ${dot}
                opacity: ${active ? 1 : 0.5};
                `}
        />
      </button>
    </li>
  );
};
