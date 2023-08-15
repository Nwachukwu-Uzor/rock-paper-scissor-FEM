import React, { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  open: boolean;
  handleDismiss: () => void;
  dismissible?: boolean;
}

export const Modal: React.FC<Props> = ({
  open,
  handleDismiss,
  dismissible,
  children,
}) => {
  return open ? (
    <section
      onClick={dismissible ? handleDismiss : undefined}
      className="fixed top-0 left-0 bottom-0 right-0 z-40 flex items-center justify-center"
    >
      <div className="relative z-50">{children}</div>
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 z-20 backdrop-blur-sm bg-black/50 ${
          dismissible ? "cursor-pointer" : ""
        }`}
      ></div>
    </section>
  ) : null;
};
