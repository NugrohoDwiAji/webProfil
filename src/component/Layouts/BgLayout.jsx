import React from "react";
import Corak from "../Corak";

export default function BgLayout({ children }) {
 
  return (
    <div className="relative overflow-hidden ">
      <Corak top="-top-40" left="-left-80" />
      <Corak left={"-left-80"} bottom={"-bottom-44"} />
      <Corak top="-top-40" right="-right-80" />
      <Corak right={"-right-80"} bottom={"-bottom-44"} />

      {children}
    </div>
  );
}
