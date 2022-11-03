import styled from "@emotion/styled";

export const BackgroundImage = styled.picture`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 500px;

  source,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
