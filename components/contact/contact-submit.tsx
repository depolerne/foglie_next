import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { TextLBItalic } from "../../public/design/components/typography/libre-baskerville";
import { theme } from "../../theme/theme";
import { TContactFormStatus } from "./contact-info";

const container = css`
  height: 70px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: flex-end;
  }
`;
const buttonStyle = css`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 0;
  background: ${theme.colors.burlyWood.high};
  cursor: pointer;
  outline: none;
  border: none;
`;

const text = css`
  width: 272px;
  text-align: center;
  @media (max-width: ${theme.breakpoints.md}) {
    text-align: right;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    width: 180px;
  }
`;

const StyledButton = styled.button`
  ${buttonStyle}
  opacity: ${(props: any) => (props.isLoading ? 0.5 : 1)};
`;

interface IProps {
  onSubmit: () => void;
  status: TContactFormStatus;
}

const ContactSubmit: React.FC<IProps> = ({ status, onSubmit }) => {
  const { t } = useTranslation();
  const isLoading = status === "loading";

  return (
    <div css={container}>
      <StyledButton disabled={isLoading} isLoading={isLoading} onClick={onSubmit}>
        <img src="/static/arrow-white.svg" alt="Arrow icon" />
      </StyledButton>
      <TextLBItalic css={text}>{t("contact:submitText")}</TextLBItalic>
    </div>
  );
};

export default ContactSubmit;
