import { css } from "@emotion/core";

import { Typography } from "../Typography";

const style = {
  title: css({
    marginTop: 32,
    textTransform: "uppercase",
  }),
  description: css({
    marginTop: 16,
  }),
};

const card = css`
  background-color: #fafafa;
  padding: 24px 15px;
`;

interface IProps {
  imageIndex: number;
  title: string;
}

const PriceBlock: React.FC<IProps> = ({ imageIndex, title }) => {
  let image = "";

  if (imageIndex === 0) image = "/static/pricing-talk.svg";
  else if (imageIndex === 1) image = "/static/pricing-document.svg";
  else if (imageIndex === 2) image = "/static/pricing-checked-document.svg";

  return (
    <div css={card}>
      <img src={image} alt="Price icon" width="65" height="81" />
      <Typography variant="h6" css={style.title} text={title} />
    </div>
  );
};

export default PriceBlock;
