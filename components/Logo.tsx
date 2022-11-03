import React from "react";

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  white?: boolean;
}

export const Logo: React.FC<IProps> = ({ white, ...rest }) => {
  return <img src={white ? "/static/white-logo.svg" : "/static/black-logo.svg"} alt="Logo" {...rest} />;
};
