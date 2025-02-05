import React from "react";

export default function CardKemampuan(props) {
  const { icon, children, judul, tipe } =props;
  return (
    <div
      className={` w-40 h-48 lg:h-44 lg:w-[17rem]  bg-opacity-20 rounded-2xl p-3 text-gray-800 ${tipe} overflow-scroll scrollbar-hide`}
    >
      <div className="gap-3 [&>svg]:w-4 lg:[&>svg]:h-7 lg:[&>svg]:w-7 text-&{tipe} flex items-start md:items-end mb-2 ">
        {icon}
        <h1 className="font-semibold text-xs lg:text-base">{judul}</h1>
      </div>
      <p className="text-xs  md:text-sm text-wrap  md:ml-10 text-justify">{children}</p>
    </div>
  );
}
