import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  img: string;
  alt: string;
}

export const Option: React.FC<Props> = ({ img, alt, ...rest }) => {
  return (
    <div {...rest}>
      <img
        src={img}
        alt={alt}
        className="w-24 lg:w-36 active:opacity-90 active:scale-110 duration-150 hover:scale-[1.05] cursor-pointer relative z-20"
      />
    </div>
  );
};
