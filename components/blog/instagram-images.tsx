import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

import { TextLBH3 } from "../../public/design/components/typography/libre-baskerville";
import { IInstagramImage } from "../../services/blog-service";
import { theme } from "../../theme/theme";
import { Img } from "../Img";

const container = (count: number) => css`
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: repeat(${count}, minmax(auto, 360px));
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1px;
`;

const imageStyle = {
  display: "block",
  height: "100%",
  width: "100%",
};

const StyledImageContainer = styled.div<{ size: number }>`
  width: ${(props) => props.size - 1 + "px"};
  height: ${(props) => props.size - 1 + "px"};
`;

const hashtagStyle = css`
  max-width: 550px;
  min-width: 380px;
  width: 50%;
  height: 128px;
  background-color: ${theme.colors.white.high};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hashtag = () => {
  return (
    <div css={hashtagStyle}>
      <TextLBH3>#fogliedalloro</TextLBH3>
    </div>
  );
};

const Image = (props: any) => {
  return <Img style={imageStyle} data-src={props.img} alt="Instagram image" />;
};

const getImages = (images: IInstagramImage[], count: number) => {
  const renderedImages = [];

  for (let i = 0; i < count * 2; i++) {
    if (images[i]) {
      renderedImages.push({
        id: images[i].id,
        src: images[i].media_url,
      });
    }
  }

  return renderedImages;
};

const getImagesCountInRow = (images: IInstagramImage[], windowWidth: number) => {
  const imageMinSize = 240;
  const imagesMinCountInRow = 6;
  const imagesMaxCountInRow = images.length / 2;

  let imagesCountInRow = Math.floor(windowWidth / imageMinSize);

  if (imagesCountInRow < imagesMinCountInRow) {
    imagesCountInRow = imagesMinCountInRow;
  }

  if (imagesCountInRow > imagesMaxCountInRow) {
    imagesCountInRow = imagesMaxCountInRow;
  }

  return imagesCountInRow;
};

interface IProps {
  images: IInstagramImage[];
}

const InstagramImages: React.FC<IProps> = ({ images }) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  const imagesCountInRow = getImagesCountInRow(images, windowWidth);
  const imageSize = Math.floor(windowWidth / imagesCountInRow);

  useEffect(() => {
    if (containerRef?.current) {
      setWindowWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <a
      ref={containerRef}
      css={container(imagesCountInRow)}
      href="https://www.instagram.com/fogliedalloro/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Hashtag />
      {getImages(images, imagesCountInRow).map((img) => (
        <StyledImageContainer key={img.id} size={imageSize}>
          <Image img={img.src} />
        </StyledImageContainer>
      ))}
    </a>
  );
};

export default InstagramImages;
