import React from "react";

export default function CardKemampuan(props) {
  const { icon, children, judul, tipe } =props;
  return (
    <div
      className={`h-44 w-[17rem]  bg-opacity-20 rounded-2xl p-3 text-gray-800 ${tipe} overflow-scroll scrollbar-hide`}
    >
      <div className="gap-3 [&>svg]:h-7 [&>svg]:w-7 text-&{tipe} flex items-end mb-2 ">
        {icon}
        <h1 className="font-semibold">{judul}</h1>
      </div>
      <p className="text-sm text-wrap ml-10 text-justify">{children}</p>
    </div>
  );
}
