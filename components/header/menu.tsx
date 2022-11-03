import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";

import i18nConfig from "../../i18n.json";
import { theme } from "../../theme/theme";
import { NavDropdown } from "./dropdown";
import { NavLink } from "./nav_link";
import { SideMenu } from "./sidemenu/side-menu";
import { ToggleButton } from "./ToggleButton";

const { allLanguages } = i18nConfig;

const Nav = styled.nav`
  display: none;

  @media (min-width: ${theme.breakpoints.md}) {
    display: flex;
  }
`;

const StyledNavDropdown = styled(NavDropdown)<{ isActive: boolean }>`
  & p {
    color: ${(props) => (props.isActive ? theme.colors.darkBlue.high : theme.colors.darkBlue.medium)};
  }
`;

const NavItem = styled(NavLink)<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? theme.colors.darkBlue.high : theme.colors.darkBlue.medium)};
  display: flex;
  align-items: center;
  margin-left: 24px;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 16px 16px 0 16px;
  white-space: nowrap;
  color: ${theme.colors.white.high};
`;

const Menu = () => {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  function openSideMenu() {
    setIsSideMenuOpen(true);
  }

  function closeSideMenu() {
    setIsSideMenuOpen(false);
  }

  const getCurrentUrlWithoutLang = (): string => {
    const { asPath } = router;
    const paths = asPath.split("/");
    const cl = paths[1];

    if (allLanguages.includes(cl)) {
      const url = paths.filter((_, i) => i !== 1).join("/");
      return url || "/";
    }

    return cl || "/";
  };

  const getActiveMenu = (_currentUrl: string, menuUrl: string | string[]) => {
    const count = _currentUrl.split("/").length - 1;
    let currentUrl = _currentUrl;

    if (count === 1) {
      currentUrl = currentUrl.substring(1);
    } else if (count === 2) {
      currentUrl = currentUrl.substring(currentUrl.indexOf("/") + 1);
      currentUrl = currentUrl.substring(0, currentUrl.indexOf("/"));
    }

    if (!Boolean(currentUrl)) {
      return false;
    }

    return Array.isArray(menuUrl) ? menuUrl.some((menu) => menu.includes(currentUrl)) : currentUrl.includes(menuUrl);
  };

  const currentUrl = getCurrentUrlWithoutLang();

  return (
    <>
      <Nav>
        <StyledNavDropdown
          isActive={getActiveMenu(currentUrl, ["about-company", "about-team"])}
          title={t("header:about")}
        >
          <Link href="/about-company" passHref>
            <DropdownItem>{t("header:about-company")}</DropdownItem>
          </Link>
          <Link href="/about-team" passHref>
            <DropdownItem>{t("header:about-team")}</DropdownItem>
          </Link>
        </StyledNavDropdown>

        <Link href="/portfolio" passHref>
          <NavItem isActive={getActiveMenu(currentUrl, ["portfolio", "project"])}>{t("header:portfolio")}</NavItem>
        </Link>

        <Link href="/blog" passHref>
          <NavItem isActive={getActiveMenu(currentUrl, ["blog", "post"])}>{t("header:blog")}</NavItem>
        </Link>

        <Link href="/pricing" passHref>
          <NavItem isActive={getActiveMenu(currentUrl, "pricing")}>{t("header:pricing")}</NavItem>
        </Link>

        <Link href="/contact" passHref>
          <NavItem isActive={getActiveMenu(currentUrl, "contact")}>{t("header:contact")}</NavItem>
        </Link>

        <StyledNavDropdown
          title={lang}
          isActive={true}
          css={css`
            margin-left: 24px;
          `}
        >
          {allLanguages.map((lng) => {
            if (lng === lang) return null;

            return (
              <Link href={currentUrl} lang={lng} key={lng} passHref>
                <DropdownItem
                  onClick={() => {
                    document.documentElement.lang = lng;
                  }}
                >
                  {lng}
                </DropdownItem>
              </Link>
            );
          })}
        </StyledNavDropdown>
      </Nav>

      <ToggleButton aria-label="Toggle side menu button" onClick={openSideMenu} />
      <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
    </>
  );
};

export default Menu;
