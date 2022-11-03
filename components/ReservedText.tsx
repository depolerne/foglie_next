import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { theme } from "../theme/theme";
import { Typography } from "./Typography";

const StyledText = styled(Typography)`
  @media (max-width: ${theme.breakpoints.sm}) {
    order: 2;
    padding-top: 30px;
  }
`;

const currentYear = new Date().getFullYear();

export const ReservedText = () => {
  const { t } = useTranslation();

  return <StyledText variant="body2" text={`${currentYear} © ${t("footer:reserved")}`} />;
};
