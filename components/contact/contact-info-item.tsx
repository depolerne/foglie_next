import { css } from "@emotion/core";

import { theme } from "../../theme/theme";

const container = css`
  max-width: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const textStyle = css`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.darkBlue.high};
  margin-left: 24px;
`;

interface IProps {
  img: string;
  text: string;
  alt: string;
}

const ContactInfoItem: React.FC<IProps> = ({ img, text, alt }) => {
  return (
    <div css={container}>
      <img src={img} width={36} height={36} alt={alt} />
      <span css={textStyle}>{text}</span>
    </div>
  );
};

export default ContactInfoItem;
