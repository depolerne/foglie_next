import "dayjs/locale/az";
import "dayjs/locale/ru";

import { css } from "@emotion/core";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import useTranslation from "next-translate/useTranslation";

import { theme } from "../../../theme/theme";
import { ShareLinks } from "./ShareLinks";

const customBreakpoints = ["425px"];

const text = css`
  font-family: Libre Baskerville;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: ${theme.colors.burlyWood.high};
  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

const container = css`
  margin: 104px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
    margin: 40px 0 64px;
  }
`;

const shareContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${theme.breakpoints.sm}) {
    justify-content: space-between;
  }
`;

const line = css`
  height: 0px;
  width: 370px;
  margin: 0 64px;
  border-top: 1px solid ${theme.colors.burlyWood.high};
  @media (max-width: ${theme.breakpoints.xl}) {
    margin: 0 32px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 40%;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 0 16px;
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    width: 30%;
  }
  @media (max-width: ${customBreakpoints[0]}) {
    width: 15%;
  }
`;

const PublicDate = styled.span`
  ${text}
  @media (max-width: ${theme.breakpoints.lg}) {
    display: block;
    margin-bottom: 25px;
  }
`;

interface IProps {
  createdDate: number;
}

const PostShare: React.FC<IProps> = ({ createdDate }) => {
  const { t, lang } = useTranslation();
  const date = dayjs(createdDate)
    .locale(lang)
    .format("DD MMMM YYYY");

  return (
    <div css={container}>
      <PublicDate>{`${t("post:publicDate")} ${date}`}</PublicDate>
      <div css={shareContainer}>
        <span css={text}>{t("post:share")}</span>
        <div css={line} />
        <ShareLinks />
      </div>
    </div>
  );
};

export default PostShare;
