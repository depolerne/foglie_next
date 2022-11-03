import { css } from "@emotion/core";
import Carousel from "react-multi-carousel";

import { ISliderItem } from "../../services/home/slider-service";
import { theme } from "../../theme/theme";
import { SliderDot } from "./SliderDot";
import { SliderItem } from "./SliderItem";

const carouselStyle = css`
  background-color: black;
  color: white;
  align-items: stretch;
  height: 768px;

  @media (max-width: ${theme.breakpoints.xl}) {
    height: 700px;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    height: 630px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 550px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    height: 496px;
  }

  .react-multi-carousel-dot-list {
    bottom: 78px;
    display: flex;
    justify-content: flex-end;
    padding-right: 60px;

    @media (max-width: ${theme.breakpoints.md}) {
      bottom: 30px;
    }
  }
`;

interface IProps {
  sliders: ISliderItem[];
}

const responsive = {
  mobile: {
    breakpoint: { max: Infinity, min: 0 },
    items: 1,
  },
};

export const HomeSlider: React.FC<IProps> = ({ sliders }) => {
  return (
    <Carousel
      css={carouselStyle}
      responsive={responsive}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={10000}
      infinite
      draggable={false}
      swipeable={false}
      showDots={true}
      customDot={<SliderDot />}
    >
      {sliders.map((item) => (
        <SliderItem key={item.id} slider={item} />
      ))}
    </Carousel>
  );
};
