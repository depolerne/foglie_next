import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { theme } from "../../theme/theme";
import { Container } from "../container";
import { Logo } from "../Logo";
import { ReservedText } from "../ReservedText";
import { SocialLinks } from "../SocialLinks";
import { Typography } from "../Typography";

const StyledFooter = styled.footer`
  position: relative;
  color: ${theme.colors.white.high};
  padding: 32px 0 24px 0;
`;

const squares = css`
  position: absolute;
  top: -3px;
  left: 0;
  right: 0;
  margin: auto;
  transform: translateX(-2px);

  @media (max-width: ${theme.breakpoints.xl}) {
    display: none;
  }
`;

const FooterBackground = styled.div`
  background-color: ${theme.colors.green[200]};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 90px;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  svg {
    fill: ${theme.colors.white.high};
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <img css={squares} src="/static/home/squares.png" alt="Squares" />
      <FooterBackground />
      <Container>
        <FooterTop>
          <Logo white />
          <Typography variant="body2" text={`${t("common:address")} / ${t("common:phone")} / ${t("common:email")}`} />
        </FooterTop>

        <FooterBottom>
          <ReservedText />
          <StyledSocialLinks />
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
