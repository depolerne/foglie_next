import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import { useEffect } from "react";

import Footer from "../components/footer/footer";
import { theme } from "../theme/theme";
import Header from "./header/header";

const layout = css`
  background-image: url(/static/background.png);
  background-repeat: repeat-y;
  background-position-x: center;
  background-position-y: 210px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: ${theme.breakpoints.lg}) {
    background-image: none;
  }
`;

const content = css`
  flex: 1;
  display: flex;
  position: relative;
`;

interface IProps {
  title: string;
  description: string;
}

const Layout: React.FC<IProps> = ({ title, description, children }) => {
  const { lang } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <div css={layout}>
        <Header />

        <div css={content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
