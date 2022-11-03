import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { NextPage } from "next";
import Router from "next-translate/Router";
import useTranslation from "next-translate/useTranslation";
import useSWR from "swr";

import { Async } from "../components/Async";
import { BackgroundImage } from "../components/BackgroundImage";
import { Container } from "../components/container";
import Layout from "../components/layout";
import { LoadMore } from "../components/LoadMore";
import { PageTitle } from "../components/PageTitle";
import { PriceList } from "../components/pricing/price-list";
import { Typography } from "../components/Typography";
import { TLanguage } from "../core/i18n";
import { IPricing, PricingService } from "../services/pricingService";

const StyledText = styled(Typography)`
  margin-top: 26px;
  margin-bottom: 64px;
`;

const StyledContainer = styled(Container)`
  margin-bottom: 104px;
`;

interface IProps {
  initialData: IPricing[];
}

const Pricing: NextPage<IProps> = ({ initialData }) => {
  const { t, lang } = useTranslation();
  const branch = useSWR(PricingService.getManyQuery(lang), (query) => PricingService.getMany(query, lang), {
    initialData,
    refreshInterval: 0,
  });

  return (
    <Layout description={"Our pricing"} title={t("pricing:title")}>
      <>
        <BackgroundImage>
          <source srcSet="/static/pricing-bg.webp" type="image/webp" />
          <source srcSet="/static/pricing-bg.png" type="image/png" />
          <img src="/static/pricing-bg.png" alt="Background image" />
        </BackgroundImage>
        <StyledContainer>
          <PageTitle
            subtitle={t("pricing:subtitle")}
            title={t("pricing:title")}
            css={css`
              margin-bottom: 64px;
            `}
          />

          <Async branch={branch} minHeight="188px" renderData={(pricings) => <PriceList pricings={pricings} />} />

          <StyledText
            variant="body1"
            text={t("pricing:description")}
            css={css`
              margin-top: 64px;
            `}
          />
          <LoadMore onClick={() => Router.pushI18n("/contact")} title={t("pricing:text")} />
        </StyledContainer>
      </>
    </Layout>
  );
};

export async function getStaticProps({ lang }: { lang: TLanguage }) {
  const initialData = await PricingService.getMany(PricingService.getManyQuery(lang), lang);
  return { props: { initialData } };
}

export default Pricing;
