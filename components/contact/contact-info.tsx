import { css } from "@emotion/core";
import styled from "@emotion/styled";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import { useState } from "react";

import { ContactService, IContactForm } from "../../services/contact-service";
import { theme } from "../../theme/theme";
import { PageTitle } from "../PageTitle";
import { contactBreakPoints } from "./breakpoints";
import ContactForm from "./contact-form";
import ContactInfoItem from "./contact-info-item";
import ContactSubmit from "./contact-submit";

const ContactMap = dynamic(() => import("./contact-map"), { ssr: false });

const map = css`
  margin-top: 64px;
  min-height: 400px;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    min-height: 300px;
  }
  @media (max-width: 600px) {
    min-height: 200px;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100% !important;

    > div {
      flex: 1;
    }
  }
`;

const container = css`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: auto;
  margin-bottom: 104px;

  @media (max-width: ${contactBreakPoints[0]}) {
    width: auto;
  }
`;

const info = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 64px;
`;

const StyledTitle = styled(PageTitle)`
  margin-top: 32px;
  @media (max-width: ${theme.breakpoints.lg}) {
    margin-top: 64px;
  }

  & h3 {
    @media (max-width: ${theme.breakpoints.xs}) {
      font-size: 46px;
    }
  }
`;

export type TContactFormErrors = Array<keyof IContactForm>;
export type TContactFormStatus = "init" | "loading";

const ContactInfo = () => {
  const { t } = useTranslation();

  const [form, setState] = useState<IContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<TContactFormErrors>([]);

  const [status, setStatus] = useState<TContactFormStatus>("init");

  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateFields = (form: IContactForm) => {
    const { name, email, message } = form;
    const errors: Array<keyof IContactForm> = [];

    if (name === "") {
      errors.push("name");
    }
    if (email === "" || !validateEmail(email)) {
      errors.push("email");
    }
    if (message === "") {
      errors.push("message");
    }

    setErrors(errors);
    return errors.length === 0;
  };

  const onSubmit = () => {
    if (validateFields(form)) {
      setStatus("loading");
      ContactService.sendMessage(
        ContactService.sendMessageQuery(form.name, form.email, form.message),
        form.name,
        form.email,
        form.message,
      ).finally(() => {
        setStatus("init");
      });
    }
  };

  return (
    <div css={container}>
      <div css={map}>
        <ContactMap />
      </div>
      <StyledTitle subtitle={t("contact:subtitle")} title={t("contact:contactInformation")} />
      <div css={info}>
        <ContactInfoItem img={"/static/address.svg"} text={t("common:address")} alt="Address icon" />
        <ContactInfoItem img={"/static/phone.svg"} text={t("common:phone")} alt="Phone icon" />
        <ContactInfoItem img={"/static/email.svg"} text={t("common:email")} alt="Email icon" />
      </div>
      <ContactForm form={form} errors={errors} onChange={updateField} />
      <ContactSubmit status={status} onSubmit={onSubmit} />
    </div>
  );
};

export default ContactInfo;
