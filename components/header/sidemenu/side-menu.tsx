import styled from "@emotion/styled";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import { Router, useRouter } from "next/router";

import i18nConfig from "../../../i18n.json";
import { NavLink } from "../nav_link";
import { SideMenuContainer } from "./side-menu-container";
import { SideMenuDropdown } from "./side-menu-dropdown";
import { SideMenuFooter } from "./side-menu-footer";
import { SideMenuHeader } from "./side-menu-header";

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  margin-left: 8px;
  margin-bottom: 24px;
  white-space: nowrap;
`;

const LanguageDropdown = styled(SideMenuDropdown)`
  display: inline-block;
  text-align: right;
`;

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const { allLanguages } = i18nConfig;

export const SideMenu: React.FC<IProps> = ({ onClose, isOpen }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { lang } = useTranslation();

  Router.events.on("routeChangeComplete", () => {
    if (isOpen) {
      onClose();
    }
  });

  const getCurrentUrlWithoutLang = (): string => {
    const { asPath } = router;
    const paths = asPath.split("/");
    const cl = paths[1];

    if (allLanguages.includes(cl)) {
      const url = paths.filter((_, i) => i !== 1).join("/");
      return url;
    }

    return cl;
  };

  const currentUrl = getCurrentUrlWithoutLang();

  return (
    <SideMenuContainer onClose={onClose} isOpen={isOpen}>
      <div>
        <SideMenuHeader onClick={onClose} />

        <Link href="/about-company" passHref>
          <NavItem>{t("header:about-company")}</NavItem>
        </Link>
        <Link href="/about-team" passHref>
          <NavItem>{t("header:about-team")}</NavItem>
        </Link>

        <Link href="/portfolio" passHref>
          <NavItem>{t("header:portfolio")}</NavItem>
        </Link>

        <Link href="/blog" passHref>
          <NavItem>{t("header:blog")}</NavItem>
        </Link>

        <Link href="/pricing" passHref>
          <NavItem>{t("header:pricing")}</NavItem>
        </Link>

        <Link href="/contact" passHref>
          <NavItem>{t("header:contact")}</NavItem>
        </Link>

        <LanguageDropdown title={`${t("header:language")} - ${lang}`} isLanguage>
          {allLanguages.map((lng) => {
            if (lng === lang) return null;

            return (
              <Link href={currentUrl} lang={lng} key={lng} passHref>
                <DropdownItem>{lng}</DropdownItem>
              </Link>
            );
          })}
        </LanguageDropdown>
      </div>

      <SideMenuFooter />
    </SideMenuContainer>
  );
};
