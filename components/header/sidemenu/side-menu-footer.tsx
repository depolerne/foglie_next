import styled from "@emotion/styled";
import React from "react";

import { theme } from "../../../theme/theme";
import { ReservedText } from "../../ReservedText";
import { SocialLinks } from "../../SocialLinks";

interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const StyledSocialLinks = styled(SocialLinks)`
  margin-bottom: 20px;

  svg {
    fill: ${theme.colors.black.low};
  }
`;

export const SideMenuFooter: React.FC<IProps> = () => {
  return (
    <div>
      <StyledSocialLinks />
      <ReservedText />
    </div>
  );
};
