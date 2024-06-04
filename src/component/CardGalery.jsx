import React from "react";

export default function CardGalery({img, desc}) {
  return (
    <div className=" h-56 w-40 md:h-80 md:w-60 shadow-xl rounded-lg">
      <img src={img} alt="" className="w-full bg-red-400 h-[8rem] md:h-44 rounded-lg shadow-xl" />
      <p className="p-2 h-20 md:h-32  overflow-auto scrollbar-hide">{desc}</p>
    </div>
  );
}
