import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSWR from "swr";

import { BackgroundImage } from "../../components/BackgroundImage";
import BlogPost from "../../components/blog/blog-post/blog-post";
import { Container } from "../../components/container";
import Layout from "../../components/layout";
import { PostService } from "../../services/post-service";

interface IProps {
  // initialData: IPost;
}

const Post: React.FC<IProps> = () => {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const id = router.query.id?.toString();

  const { data, error } = useSWR(PostService.getOneQuery({ lang, id }), (query) => PostService.getOne(query, lang), {
    // initialData,
  });

  if (error) return <p>{error?.message}</p>;
  if (!data) return null;

  return (
    <Layout description={"Subscribe us and read more news"} title={t("post:title")}>
      <BackgroundImage>
        <source srcSet="/static/post/post-bg.webp" type="image/webp" />
        <source srcSet="/static/post/post-bg.png" type="image/png" />
        <img src="/static/post/post-bg.png" alt="Background image" />
      </BackgroundImage>
      <Container>
        <BlogPost post={data} />
      </Container>
    </Layout>
  );
};

// export async function getServerSideProps({ lang, params: { id } }: { lang: TLanguage; params: { id: string } }) {
//   const initialData = await PostService.getOne(PostService.getOneQuery({ lang, id }), lang);
//   return { props: { initialData } };
// }

export default Post;
