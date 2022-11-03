import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";

import ContactImage from "../components/contact/contact-image";
import ContactInfo from "../components/contact/contact-info";
import { Container } from "../components/container";
import Layout from "../components/layout";

const wrapperStyle = css`
  flex: 1;
`;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Layout description={"Here you could contact with us"} title={t("contact:title")}>
      <div css={wrapperStyle}>
        <ContactImage />
        <Container>
          <ContactInfo />
        </Container>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default Contact;
