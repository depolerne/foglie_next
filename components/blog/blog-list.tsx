import { css } from "@emotion/core";

import { IBlogItem } from "../../services/blog-service";
import { theme } from "../../theme/theme";
import BlogListItem from "../blog/blog-list-item";

const list = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(240px, 360px));
  justify-content: center;
  grid-column-gap: 24px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, minmax(240px, auto));
  }

  @media (max-width: 640px) {
    grid-template-columns: auto;
  }
`;

const BlogList = (props: { posts: IBlogItem[] }) => {
  return (
    <div css={list}>
      {props.posts.map((post: IBlogItem) => (
        <BlogListItem
          key={post.id}
          id={post.id}
          image={post.image?.url}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default BlogList;
