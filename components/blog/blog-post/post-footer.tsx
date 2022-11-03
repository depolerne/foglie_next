import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSWR from "swr";

import { PostService } from "../../../services/post-service";
import { theme } from "../../../theme/theme";
import ReadMore from "../../read-more";
import RelatedPosts from "./related-posts";

const customBreakpoints = ["692px"];

const container = css`
  display: flex;
  position: relative;
  justify-content: space-between;
  @media (max-width: ${theme.breakpoints.lg}) {
    /* margin-bottom: -104px; */
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const postsContainer = css`
  width: 100%;
  max-width: 672px;
  padding-top: 64px;
  margin: 80px 0 104px 64px;
  border-top: 1px solid ${theme.colors.burlyWood.high};

  @media (max-width: ${theme.breakpoints.xl}) {
    margin-left: 32px;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-top: 0;
    padding-top: 48px;
    margin-bottom: 32px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    border-top: none;
    margin-left: 0;
    margin-bottom: 0;
    padding-top: 32px;
  }
`;

const brownBlock = css`
  min-width: 256px;
  height: 304px;
  margin-left: 135px;
  z-index: -1;
  background: ${theme.colors.burlyWood.high};
  @media (max-width: ${theme.breakpoints.lg}) {
    display: none;
  }
`;

const morePostsContainer = css`
  text-align: right;
  @media (max-width: ${theme.breakpoints.lg}) {
    text-align: left;
    margin-bottom: 32px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 64px;
  }
`;

const img = css`
  max-width: 352px;
  max-height: 352px;
  bottom: 0;
  position: absolute;
  display: flex;

  @media (max-width: ${theme.breakpoints.lg}) {
    position: static;
    display: inline;
  }
  @media (max-width: ${customBreakpoints[0]}) {
    width: 45%;
    height: 45%;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    height: auto;
  }
`;

const PostFooter = () => {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const id = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

  const { data, error } = useSWR(PostService.getRelatedPostsQuery({ lang, id }), (query) =>
    PostService.getRelatedPosts(query, lang),
  );

  if (error) return <p>{error?.message}</p>;
  if (!data) return <div />;

  return (
    <div css={container}>
      <picture css={img}>
        <source srcSet="/static/post/footer.webp" type="image/webp" />
        <source srcSet="/static/post/footer.jpg" type="image/jpg" />
        <img src="/static/post/footer.jpg" alt="Background image" />
      </picture>
      <div css={brownBlock}></div>

      <div css={postsContainer}>
        <RelatedPosts posts={data} />

        <div css={morePostsContainer}>
          <ReadMore link="/blog" lang={lang} text={t("post:morePosts")} />
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
