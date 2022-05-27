import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Convat({ data }) {
  // const { danhSachCuoc } = useSelector((state) => state.baucua);
  // console.log(danhSachCuoc);
  const { tongdiem } = useSelector((state) => state.baucua);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "tang_cuoc", data: data.loai });
  };
  const decrease = () => {
    dispatch({ type: "giam_cuoc", data: data.loai });
  };
  return (
    <div className="col-sm-4 mt-4 mb-4">
      <div className="card bg-warning">
        <img
          className="card-img-top"
          src={`/img/${data.loai}.png`}
          alt={data.loai}
        />
        <div className="card-body p-0">
          <h4 className="card-title text-center">{data.loai}</h4>
          {/* <p className="card-text">cược:</p> */}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark "
              onClick={() => decrease()}
              disabled={!data.diemCuoc}
            >
              -
            </button>
            <p className="text-dark mx-2">{data.diemCuoc}</p>
            <button
              className="btn btn-dark"
              onClick={() => increase()}
              disabled={!tongdiem}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
