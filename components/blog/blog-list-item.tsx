import { css } from "@emotion/core";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import { TextSBody1, TextSH5 } from "../../public/design/components/typography/sarabun";
import { theme } from "../../theme/theme";
import { Img } from "../Img";
import ReadMore from "../read-more";

const container = css`
  display: flex;
  flex-direction: column;
  padding-top: 64px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-top: 48px;
  }

  img {
    transition: 0.3s transform ease;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }
`;

const imageStyle = css`
  overflow: hidden;
  line-height: 0;
  height: 350px;
  background-color: black;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`;

const titleStyle = css`
  margin: 24px 0;
  cursor: pointer;
`;

const descriptionStyle = css`
  margin-bottom: 40px;
  cursor: auto;
`;

interface IProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const BlogListItem: React.FC<IProps> = ({ id, title, description, image }) => {
  const { lang } = useTranslation();

  return (
    <div css={container}>
      <Link href="/post/[id]" as={`/post/${id}`} lang={lang} passHref>
        <div css={imageStyle}>
          <Img data-src={image} alt={title} />
        </div>
      </Link>

      <Link href="/post/[id]" as={`/post/${id}`} lang={lang} passHref>
        <TextSH5 css={titleStyle}>{title}</TextSH5>
      </Link>

      <TextSBody1 css={descriptionStyle}>{description}</TextSBody1>

      <ReadMore link="/post/[id]" as={`/post/${id}`} lang={lang} />
    </div>
  );
};

export default BlogListItem;
