import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";

import { IBlogItem } from "../../services/blog-service";
import BlogList from "../blog/blog-list";
import { Container } from "../container";
import { PageTitle } from "../PageTitle";

const HomeBlog = (props: { posts: IBlogItem[] }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <PageTitle subtitle={t("blog:subtitle")} title={t("blog:title")} />

      <BlogList posts={props.posts} />
    </Container>
  );
};

export default HomeBlog;
