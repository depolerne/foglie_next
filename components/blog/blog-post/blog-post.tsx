import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";
import Zoom from "react-medium-image-zoom";

import { IPost } from "../../../services/post-service";
import { EditorContent } from "../../EditorContent";
import { PageTitle } from "../../PageTitle";
import PostFooter from "./post-footer";
import PostShare from "./post-share";

const banner = css`
  margin-bottom: 40px;
`;

const image = css`
  display: block;
  height: 464px;
  width: 100%;
  object-fit: cover;
`;

interface IProps {
  post: IPost;
}

const BlogPost: React.FC<IProps> = ({ post }) => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle subtitle={t("post:title")} title={post.title} />
      <div>
        <div css={banner}>
          <Zoom wrapStyle={{ width: "100%" }}>
            <img css={image} src={post.image.url} alt="Banner photo" />
          </Zoom>
        </div>
        <EditorContent content={post.content ?? ""} />
        <PostShare createdDate={post.createdDate ?? ""} />
        <PostFooter />
      </div>
    </>
  );
};

export default BlogPost;
