// import XucXac from "../BauCua/XucXac";

const initialState = {
  tongdiem: 500,
  danhSachCuoc: [
    { diemCuoc: 0, loai: "bau" },
    { diemCuoc: 0, loai: "cua" },
    { diemCuoc: 0, loai: "tom" },
    { diemCuoc: 0, loai: "ca" },
    { diemCuoc: 0, loai: "nai" },
    { diemCuoc: 0, loai: "ga" },
  ],
  xucxac: ["bau", "tom", "ca"],
};
const baucuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tang_cuoc":
      // const tongdiem = state.tongdiem - 100
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.loai === action.data) {
          return { ...item, diemCuoc: item.diemCuoc + 100 };
        }
        return item;
      });
      return { ...state, danhSachCuoc, tongdiem: state.tongdiem - 100 };
    case "giam_cuoc":
      state.tongdiem += 100;
      const danhSachCuoc2 = state.danhSachCuoc.map((item) => {
        if (item.loai === action.data) {
          return { ...item, diemCuoc: item.diemCuoc - 100 };
        }
        return item;
      });
      return { ...state, danhSachCuoc: danhSachCuoc2 };
    case "play":
      const xucXac = ["bau", "cua", "tom", "ca", "ga", "nai"];
      const newXucXac = state.xucxac.map((item) => {
        const random = Math.floor(Math.random() * 6);
        return xucXac[random];
      });
      const listDaCuoc = state.danhSachCuoc.filter((item) => item.diemCuoc);
      // console.log(listDaCuoc);
      const danhSachTrungCuoc = listDaCuoc.filter((item) => {
        const found = newXucXac.find((convat) => convat === item.loai);
        if (found) {
          return item;
        }
      });
      console.log(danhSachTrungCuoc);
      let diemThuong = 0;
      if (danhSachTrungCuoc) {
        diemThuong += danhSachTrungCuoc.reduce((result = 0, item) => {
          return (result += item.diemCuoc);
        }, 0);
        console.log("diem hoan", diemThuong);
        diemThuong += newXucXac.reduce((result = 0, item) => {
          const found = danhSachTrungCuoc.find((item2) => item2.loai === item);
          console.log("found", found);
          if (found) {
            return (result += found.diemCuoc);
          }
          return result;
        }, 0);
      }

      const diemTong = state.tongdiem + diemThuong;
      const danhSachCuocReset = state.danhSachCuoc.map((item) => {
        return { ...item, diemCuoc: 0 };
      });
      return {
        ...state,
        xucxac: newXucXac,
        tongdiem: diemTong,
        danhSachCuoc: danhSachCuocReset,
      };
    default:
      return state;
  }
};
export default baucuaReducer;
