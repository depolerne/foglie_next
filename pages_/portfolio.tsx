import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Modal from "react-modal";
import useSWR from "swr";

import { Async } from "../components/Async";
import { BackgroundImage } from "../components/BackgroundImage";
import { Container } from "../components/container";
import Layout from "../components/layout";
import { PageTitle } from "../components/PageTitle";
import { ProjectsList } from "../components/portfolio/projects-list";
import { ProjectsNavbar } from "../components/portfolio/projects-navbar";
import { TLanguage } from "../core/i18n";
import { CategoryService, ICategory } from "../services/categoryService";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    backgroundColor: "black",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 20px;
  cursor: pointer;
`;

interface IProps {
  initialData: ICategory[];
}

const Portfolio: React.FC<IProps> = ({ initialData }) => {
  const { t, lang } = useTranslation();
  const router = useRouter();
  const imgUrl = router.query.imgUrl?.toString();
  const branch = useSWR(CategoryService.getManyQuery(lang), (q) => CategoryService.getMany(q, lang), {
    initialData,
    refreshInterval: 0,
  });

  return (
    <Layout description={"Here is our portfolio where you can find all projects"} title={t("portfolio:title")}>
      <Modal isOpen={!!imgUrl} onRequestClose={router.back} contentLabel="Post modal" style={customStyles}>
        <CloseButton onClick={router.back} style={{ position: "absolute", top: 0, right: 0 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.12278 3.43979L10.683 12L2.12277 21.8772C2.12277 21.8772 2.12278 21.8772 2.12278 21.8772C2.30459 22.059 2.5432 22.1499 2.7813 22.1499C3.0194 22.1499 3.25797 22.059 3.43981 21.8772L3.43982 21.8772L12 13.317L20.5602 21.8772C20.742 22.059 20.9806 22.1499 21.2187 22.1499C21.4568 22.1499 21.6954 22.059 21.8772 21.8772L21.8772 21.8772C22.2409 21.5135 22.2409 20.9239 21.8772 20.5602L13.317 12L21.8772 3.43978C22.2409 3.07609 22.2409 2.48643 21.8772 2.12276C21.5135 1.75913 20.9239 1.75906 20.5602 2.12278L12 10.683L3.43978 2.12277C3.07609 1.75908 2.48643 1.75907 2.12276 2.12278C1.75913 2.48646 1.75906 3.07611 2.12277 3.43978C2.12277 3.43978 2.12278 3.43979 2.12278 3.43979Z"
              strokeWidth="0.3"
            />
          </svg>
        </CloseButton>
        <img src={imgUrl} alt="Image" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
      </Modal>

      <BackgroundImage>
        <source srcSet="/static/portfolio-bg.webp" type="image/webp" />
        <source srcSet="/static/portfolio-bg.jpg" type="image/jpg" />
        <img src="/static/portfolio-bg.jpg" alt="Background image" />
      </BackgroundImage>
      <Container>
        <PageTitle subtitle={t("portfolio:subtitle")} title={t("portfolio:title")} />
        <Async
          branch={branch}
          renderData={(categories) => <ProjectsNavbar categories={categories} />}
          minHeight="18px"
        />

        <ProjectsList />
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ lang }: { lang: TLanguage }) {
  const initialData = await CategoryService.getMany(CategoryService.getManyQuery(lang), lang);
  return { props: { initialData } };
}

export default Portfolio;
