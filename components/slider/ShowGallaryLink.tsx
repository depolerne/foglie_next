import { css } from "@emotion/core";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import { theme } from "../../theme/theme";
import { Typography } from "../Typography";

const action = css`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.white.disabled};
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media (max-width: ${theme.breakpoints.md}) {
    bottom: 32px;
    left: 16px;
  }
`;

const actionIcon = css`
  margin-bottom: 20px;
`;

const actionText = css`
  color: #f1ebe5;
  text-transform: uppercase;
  line-height: 16px;
`;

const content = css`
  width: 72px;
`;

export const ShowGalleryLink = ({ ...rest }) => {
  const { t } = useTranslation();

  return (
    <Link href="/portfolio" passHref>
      <a css={action} {...rest}>
        <div css={content}>
          <img css={actionIcon} src="/static/arrow-slider.svg" width={18} height={16} alt="Action icon" />
          <Typography css={actionText} text={t("home:sliderAction")} />
        </div>
      </a>
    </Link>
  );
};
