import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { IImage } from "../../core/models";
import { IMember } from "../../services/memberService";
import { theme } from "../../theme/theme";
import { Typography } from "../Typography";

const Wrapper = styled.div`
  margin-bottom: 48px;

  &:nth-of-type(even) {
    padding-top: 22px;
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;

  img {
    width: 100%;
  }

  &:hover {
    img {
      filter: grayscale(0%);
      transform: scale(1.05);
    }
  }
`;

const MemberImage = styled.div<{ image: IImage }>`
  background-color: black;
  background-image: url(${({ image }) => image.url});
  background-size: cover;
  background-position: center top;
  height: 282px;
  width: 100%;

  filter: grayscale(100%);
  will-change: transform;
  transition: 0.2s all ease;

  :hover {
    filter: grayscale(0%);
    transform: scale(1.05);
  }
`;

const Info = styled.div`
  padding: 24px 20px;
`;

const NameText = styled(Typography)`
  text-transform: uppercase;
`;

interface IProps {
  member: IMember;
}

export const MemberCard: React.FC<IProps> = ({ member: { image, firstName, lastName, position } }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <MemberImage image={image} />
      </ImageWrapper>
      <Info>
        <NameText variant="h5" text={firstName} />
        <NameText variant="h5" text={lastName} />
        <Typography
          text={position}
          variant="sub1"
          css={css`
            margin-top: 12px;
            color: ${theme.colors.brown[200]};
          `}
        />
      </Info>
    </Wrapper>
  );
};
