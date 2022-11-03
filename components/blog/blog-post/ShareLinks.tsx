import styled from "@emotion/styled";

import { theme } from "../../../theme/theme";
import { FacebookLink, InstagramLink, LinkedinLink } from "../../SocialLinks";

const Container = styled.div`
  display: inline-flex;

  svg {
    fill: ${theme.colors.brown[200]};
  }
`;

const Spacer = styled.div`
  width: 20px;
  height: 1px;
`;

export const ShareLinks = () => {
  return (
    <Container>
      <FacebookLink />
      <Spacer />
      <InstagramLink />
      <Spacer />
      <LinkedinLink />
    </Container>
  );
};
