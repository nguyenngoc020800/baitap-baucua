import React from "react";
import Convat from "./Convat";
import { useSelector } from "react-redux";
export default function Banchoi() {
  const { danhSachCuoc } = useSelector((state) => state.baucua);
  return (
    <div className="row">
      {danhSachCuoc.map((item) => {
        return <Convat key={item.loai} data={item} />;
      })}
    </div>
  );
}
