import React from "react";

export default function SkilBar({ color, persentase, judul, width}) {
  return (
    <div className="w-60">
      <div className="text-sm flex justify-between">
        <h1>{judul}</h1>
        <h1>{persentase}%</h1>
      </div>
      <div className="h-1 bg-gray-200 w-60 rounded-full">
        <div
          className={`h-1 bg-${color}500 ${width} rounded-full`}
        ></div>
      </div>
    </div>
  );
}
