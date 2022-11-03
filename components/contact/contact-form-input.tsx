import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { Text } from "../../public/design/components/typography/roboto";
import { IContactForm } from "../../services/contact-service";
import { theme } from "../../theme/theme";

const container = css`
  display: flex;
  flex-direction: column;
`;
const labelStyle = css`
  text-transform: uppercase;
  margin-bottom: 26px;
`;

const inputTextStyle = css`
  font-family: Libre Baskerville;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.18px;
  color: ${theme.colors.darkBlue.high};
`;

const input = css`
  ${inputTextStyle};
  width: 100%;
  height: 32px;
  border: none;
  border-bottom: 1px solid ${theme.colors.burlyWood.high};
  outline: none;
  ::placeholder {
    ${inputTextStyle};
    color: ${theme.colors.darkBlue.disabled};
  }
`;

const StyledInput = styled.input`
  ${input};
  border-bottom-color: ${(props: any) => (props.error ? "red" : theme.colors.burlyWood.high)};
`;

interface IProps {
  label: string;
  placeholder: string;
  value: string;
  name: keyof IContactForm;
  error: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactFormInput: React.FC<IProps> = ({ label, placeholder, name, error, value, onChange }) => {
  return (
    <div css={container}>
      <label css={labelStyle} htmlFor={name}>
        <Text>{label}</Text>
      </label>
      <StyledInput
        type="text"
        error={error}
        placeholder={placeholder}
        id={name}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default ContactFormInput;
