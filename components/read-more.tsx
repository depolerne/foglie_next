import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import { TLanguage } from "../core/i18n";
import { theme } from "../theme/theme";

const container = css`
  display: inline-flex;
  align-items: center;
  color: ${theme.colors.burlyWood.high};
  cursor: pointer;
  text-decoration: none;
`;

const textStyle = css`
  margin-right: 16px;
`;

const A = styled.a`
  text-decoration: none;
`;

interface IProps {
  link: string;
  as?: string;
  text?: string;
  lang: TLanguage;
}

const ReadMore: React.FC<IProps> = ({ link, as, text, lang }) => {
  const { t } = useTranslation();

  return (
    <Link href={link} as={as} lang={lang} passHref>
      <A>
        <div css={container}>
          <span css={textStyle}>{text || t("common:readMore")}</span>
          <img src="/static/arrow.svg" alt="Arrow icon" />
        </div>
      </A>
    </Link>
  );
};

export default ReadMore;
