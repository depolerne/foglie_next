import "dayjs/locale/az";
import "dayjs/locale/ru";

import { css } from "@emotion/core";
import dayjs from "dayjs";
import Link from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";

import { Text } from "../../../public/design/components/typography/roboto";
import { TextSH5 } from "../../../public/design/components/typography/sarabun";
import { IRelatedPost } from "../../../services/post-service";
import { theme } from "../../../theme/theme";

const container = css`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 304px));
  grid-gap: 0 64px;
  margin-bottom: 60px;

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-gap: 0 32px;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: auto;
    grid-gap: 48px 0;
    margin-bottom: 32px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    grid-gap: 32px 0;
    margin-bottom: 32px;
  }
`;
const itemStyle = css`
  display: flex;
  flex-direction: column;
`;
const createdDateStyle = css`
  text-transform: uppercase;
  color: ${theme.colors.black};
  opacity: 0.5;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin-bottom: 8px;
  }
`;

const titleStyle = css`
  cursor: pointer;
`;

interface IProps {
  posts: IRelatedPost[];
}

const relatedPosts: React.FC<IProps> = ({ posts }) => {
  const { lang } = useTranslation();

  return (
    <div css={container}>
      {posts.map((post) => {
        const date = dayjs(post.createdDate)
          .locale(lang)
          .format("DD MMMM YYYY");

        return (
          <div css={itemStyle} key={post.id}>
            <Text css={createdDateStyle}>{date}</Text>

            <Link href="/post/[id]" as={`/post/${post.id}`} lang={lang} passHref>
              <TextSH5 css={titleStyle}>{post.title}</TextSH5>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default relatedPosts;
