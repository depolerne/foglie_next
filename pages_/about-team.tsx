import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";

import { Async } from "../components/Async";
import { BackgroundImage } from "../components/BackgroundImage";
import { Container } from "../components/container";
import Layout from "../components/layout";
import { MemberList } from "../components/members/MemberList";
import { PageTitle } from "../components/PageTitle";
import { TLanguage } from "../core/i18n";
import { IMember, MemberService } from "../services/memberService";

const StyledTitle = styled(PageTitle)`
  margin-bottom: 64px;
`;

interface IProps {
  initialData: IMember[];
}

const AboutTeam: React.FC<IProps> = ({ initialData }) => {
  const { t, lang } = useTranslation();
  const branch = useSWR(MemberService.getManyQuery(lang), (query) => MemberService.getMany(query, lang), {
    initialData,
    refreshInterval: 0,
  });

  return (
    <Layout description={"Meet with our team"} title={t("team:title")}>
      <>
        <BackgroundImage>
          <source srcSet="/static/about-team-bg.webp" type="image/webp" />
          <source srcSet="/static/about-team-bg.png" type="image/png" />
          <img src="/static/about-team-bg.png" alt="Background image" />
        </BackgroundImage>

        <Container>
          <StyledTitle subtitle={t("team:subtitle")} title={t("team:title")} />

          <Async branch={branch} renderData={(members) => <MemberList members={members} />} />
        </Container>
      </>
    </Layout>
  );
};

export async function getStaticProps({ lang }: { lang: TLanguage }) {
  const initialData = await MemberService.getMany(MemberService.getManyQuery(lang), lang);
  return { props: { initialData } };
}

export default AboutTeam;
