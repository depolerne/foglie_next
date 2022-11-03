import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";

import { Company } from "../components/about/company";
import { Async } from "../components/Async";
import Layout from "../components/layout";
import { TLanguage } from "../core/i18n";
import { AboutCompanyService, IAboutCompany } from "../services/company-service";

interface IProps {
  initialData: IAboutCompany;
}

const AboutCompany: React.FC<IProps> = ({ initialData }) => {
  const { lang, t } = useTranslation();
  const branch = useSWR(AboutCompanyService.getOneQuery(lang), (q) => AboutCompanyService.getOne(q, lang), {
    initialData,
  });

  return (
    <Layout description={"Informatin about our company"} title={t("about:title")}>
      <Async branch={branch} renderData={(about) => <Company about={about} />} />
    </Layout>
  );
};

export async function getStaticProps({ lang }: { lang: TLanguage }) {
  const initialData = await AboutCompanyService.getOne(AboutCompanyService.getOneQuery(lang), lang);
  return { props: { initialData } };
}

export default AboutCompany;
