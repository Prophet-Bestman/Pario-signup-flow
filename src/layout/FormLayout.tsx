import React, { ReactNode } from "react";
import { PropsWithChildren } from "react";

const FormLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-[100vh] m-0 page-bg w-full relative flex justify-center">
      <div className="clip-bg fixed w-full h-full top-0 left-0"></div>
      <div className="w-full max-w-[810px] py-[189px] relative z-20 ">
        {children}
      </div>
    </div>
  );
};

export default FormLayout;
