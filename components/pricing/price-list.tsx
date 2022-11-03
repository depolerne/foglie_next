import { css } from "@emotion/core";

import { IPricing } from "../../services/pricingService";
import { theme } from "../../theme/theme";
import PriceBlock from "./price-block";

const grid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${theme.breakpoints.xs}) {
    grid-template-columns: 1fr;
  }
`;

interface IProps {
  pricings: IPricing[];
}

export const PriceList: React.FC<IProps> = ({ pricings }) => {
  return (
    <div css={grid}>
      {pricings.map((pricing, index) => (
        <PriceBlock imageIndex={index} key={pricing.id} title={pricing.title} />
      ))}
    </div>
  );
};
