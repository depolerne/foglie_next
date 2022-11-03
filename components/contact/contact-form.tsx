import { css } from "@emotion/core";
import useTranslation from "next-translate/useTranslation";

import { TextLBH3 } from "../../public/design/components/typography/libre-baskerville";
import { IContactForm } from "../../services/contact-service";
import { theme } from "../../theme/theme";
import ContactFormInput from "../contact/contact-form-input";
import { TContactFormErrors } from "./contact-info";

const customBreakpoints = ["650px"];

const container = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const title = css`
  margin-bottom: 32px;
`;
const formStyle = css`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: auto auto;
  grid-template-rows: repeat(2, 80px);

  @media (max-width: ${customBreakpoints[0]}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 80px);
  }
`;

const name = css`
  grid-column: 1 / span 1;
`;

const email = css`
  grid-column: 2 / span 1;
  @media (max-width: ${customBreakpoints[0]}) {
    grid-column: 1 / span 1;
  }
`;

const message = css`
  grid-column: 1 / span 2;

  @media (max-width: ${customBreakpoints[0]}) {
    grid-column: 1 / span 1;
  }
`;

interface IProps {
  form: IContactForm;
  errors: TContactFormErrors;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm: React.FC<IProps> = ({ form, errors, onChange }) => {
  const { t } = useTranslation();

  return (
    <div css={container}>
      <TextLBH3 css={title}>{t("contact:contactForm")}</TextLBH3>
      <div css={formStyle}>
        <div css={name}>
          <ContactFormInput
            label={t("contact:nameLabel")}
            name={"name"}
            placeholder={t("contact:name")}
            value={form.name}
            onChange={onChange}
            error={errors.includes("name")}
          />
        </div>
        <div css={email}>
          <ContactFormInput
            label={t("contact:emailLabel")}
            name={"email"}
            placeholder={t("contact:email")}
            value={form.email}
            onChange={onChange}
            error={errors.includes("email")}
          />
        </div>
        <div css={message}>
          <ContactFormInput
            label={t("contact:messageLabel")}
            name={"message"}
            placeholder={t("contact:message")}
            value={form.message}
            onChange={onChange}
            error={errors.includes("message")}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
