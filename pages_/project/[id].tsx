import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Async } from "../../components/Async";
import Layout from "../../components/layout";
import ProjectView from "../../components/portfolio/project/project-view";
import { ProjectService } from "../../services/projectService";

interface IProps {
  // initialData: IProjectDetail;
}

const ProjectDetail: React.FC<IProps> = () => {
  const { lang } = useTranslation();
  const router = useRouter();
  const id = router.query.id?.toString();
  const branch = useSWR(ProjectService.getOneQuery(id, lang), (q) => ProjectService.getOne(q, lang), {
    // initialData,
  });

  return (
    <Layout description={"Information about project"} title={branch.data?.title ?? ""}>
      <Async branch={branch} renderData={(project) => <ProjectView project={project} />} />
    </Layout>
  );
};

// export async function getServerSideProps({ lang, params: { id } }: { lang: TLanguage; params: { id: string } }) {
//   const initialData = await ProjectService.getOne(ProjectService.getOneQuery(id, lang), lang);
//   return {
//     props: {
//       initialData,
//     },
//   };
// }

export default ProjectDetail;
