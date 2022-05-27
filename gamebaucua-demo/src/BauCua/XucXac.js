import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function XucXac() {
  const { xucxac } = useSelector((state) => state.baucua);
  const usedispatch = useDispatch();
  const play = () => {
    usedispatch({ type: "play" });
  };
  let a = 0;
  return (
    <div className="pl-4">
      {xucxac.map((item) => {
        a += 1;
        return (
          <div key={a} className="mt-2">
            <img width={100} src={`/img/${item}.png`} alt={item} />
          </div>
        );
      })}
      <button className="btn btn-success ml-4 mt-3" onClick={play}>
        xốc
      </button>
    </div>
  );
}
