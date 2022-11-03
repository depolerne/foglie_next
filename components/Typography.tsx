import { css } from "@emotion/core";
import React from "react";

interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  text: string | undefined;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "sub1" | "sub2" | "body1" | "body2" | "caption" | "overline";
  font?: "default" | "secondary";
}

export const Typography: React.FC<IProps> = ({ text, variant, font, ...rest }) => {
  const common = css`
    font-family: ${font === "secondary" ? `"Libre Baskerville", serif` : `"Sarabun", sans-serif`};
    font-weight: 400;
    margin: 0;
  `;

  const body1 = (
    <p
      css={css`
        ${common}
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.5px;
      `}
      {...rest}
    >
      {text}
    </p>
  );

  switch (variant) {
    case "h1":
      return (
        <h1
          css={css`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "300"};
            font-size: ${font === "secondary" ? "72px" : "96px"};
            line-height: ${font === "secondary" ? "89px" : "112px"};
            letter-spacing: ${font === "secondary" ? "-1.5px" : "-1.5px"};
          `}
          {...rest}
        >
          {text}
        </h1>
      );
    case "h2":
      return (
        <h2
          css={css`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "300"};
            font-size: 60px;
            line-height: 72px;
            letter-spacing: -0.5px;
          `}
          {...rest}
        >
          {text}
        </h2>
      );

    case "h3":
      return (
        <h3
          css={css`
            ${common}
            font-size: 48px;
            line-height: ${font === "secondary" ? "64px" : "56px"};
          `}
          {...rest}
        >
          {text}
        </h3>
      );
    case "h4":
      return (
        <h4
          css={css`
            ${common}
            font-size: 34px;
            line-height: 56px;
          `}
          {...rest}
        >
          {text}
        </h4>
      );
    case "h5":
      return (
        <h5
          css={css`
            ${common}
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 0.18px;
          `}
          {...rest}
        >
          {text}
        </h5>
      );
    case "h6":
      return (
        <h6
          css={css`
            ${common}
            font-weight: ${font === "secondary" ? "400" : "500"};
            font-size: 20px;
            line-height: 24px;
            letter-spacing: 0.15px;
          `}
          {...rest}
        >
          {text}
        </h6>
      );
    case "sub1":
      return (
        <p
          css={css`
            ${common}
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.15px;
          `}
          {...rest}
        >
          {text}
        </p>
      );
    case "sub2":
      return (
        <p
          css={css`
            ${common}
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.1px;
          `}
          {...rest}
        >
          {text}
        </p>
      );
    case "body1":
      return body1;
    case "body2":
      return (
        <p
          css={css`
            ${common}
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 0.25px;
          `}
          {...rest}
        >
          {text}
        </p>
      );
    case "caption":
      return (
        <p
          css={css`
            ${common}
            font-size: 12px;
            line-height: 20px;
            letter-spacing: 0.4px;
          `}
          {...rest}
        >
          {text}
        </p>
      );
    case "overline":
      return (
        <p
          css={css`
            ${common}
            font-weight: 600;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: 1.5px;
          `}
          {...rest}
        >
          {text}
        </p>
      );
    default:
      return body1;
  }
};
