import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { default as ErrorComponent } from "next/error";
import useSWR, { useSWRPages } from "swr";

import { BackgroundImage } from "../components/BackgroundImage";
import BlogList from "../components/blog/blog-list";
import Instagram from "../components/blog/instagram";
import { Container } from "../components/container";
import Layout from "../components/layout";
import { LoadMore } from "../components/LoadMore";
import { PageTitle } from "../components/PageTitle";
import { IPaginatedResponse } from "../core/models";
import { BlogService, IBlogItem } from "../services/blog-service";
import { theme } from "../theme/theme";

const container = css`
  width: 100%;
  position: relative;
`;

const StyledTitle = styled(PageTitle)`
  margin-bottom: 0;
`;

const blogListContainer = css`
  margin-bottom: 104px;
  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 64px;
  }
`;

const blogList = css`
  margin-bottom: 64px;
  min-height: 500px;
`;

const instagramContainer = css`
  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const DEFAULT_LIMIT = 6;

const Blog = () => {
  const { t, lang } = useTranslation();
  const { pages, isLoadingMore, isReachingEnd, loadMore } = useSWRPages<number | null, IPaginatedResponse<IBlogItem>>(
    "posts",
    ({ offset, withSWR }) => {
      const query = BlogService.getManyQuery({
        lang,
        skip: offset ?? 0,
        take: DEFAULT_LIMIT,
      });
      const { data, error } = withSWR(useSWR(query, () => BlogService.getMany(query, lang)));
      if (error) return <ErrorComponent title={error?.message} statusCode={404} />;
      if (!data) return null;

      return <BlogList posts={data.data} />;
    },
    (SWR, index) => {
      if (SWR.data) {
        if (SWR.data.total - DEFAULT_LIMIT * SWR.data.page <= 0) return null;
      }

      return (index + 1) * DEFAULT_LIMIT;
    },
  );

  return (
    <Layout description={"Blog page where are news and items"} title={t("blog:title")}>
      <div css={container}>
        <BackgroundImage>
          <source srcSet="/static/blog-bg.webp" type="image/webp" />
          <source srcSet="/static/blog-bg.png" type="image/png" />
          <img src="/static/blog-bg.png" alt="Background image" />
        </BackgroundImage>
        <Container css={blogListContainer}>
          <StyledTitle subtitle={t("blog:subtitle")} title={t("blog:title")} />
          <div css={blogList}>{pages}</div>
          {!isReachingEnd && <LoadMore onClick={loadMore} disabled={isLoadingMore} title={t("blog:more")} />}
        </Container>
        <div css={instagramContainer}>
          <Instagram />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Blog;
