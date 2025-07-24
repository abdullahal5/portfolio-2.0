import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`max-w-6xl w-full mx-auto bg p-4 md:p-10 ${className}`}>{children}</div>;
};

export default Container;
