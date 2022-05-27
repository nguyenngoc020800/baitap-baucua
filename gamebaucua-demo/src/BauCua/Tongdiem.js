import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Tongdiem() {
  const { tongdiem } = useSelector((state) => state.baucua);
  console.log(tongdiem);
  return (
    <div>
      <div className="mx-auto p-3 bg-warning">Tổng điểm:{tongdiem}</div>
    </div>
  );
}
