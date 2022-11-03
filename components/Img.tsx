import React from "react";

interface IProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {}

export const Img: React.FC<IProps> = ({ alt, ...rest }) => {
  return <img className="lazyload" alt={alt ?? "Image"} {...rest} width={50} height={50} />;
};
