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
      state.tongdiem -= 100;
      const danhSachCuoc = state.danhSachCuoc.map((item) => {
        if (item.loai === action.data) {
          return { ...item, diemCuoc: item.diemCuoc + 100 };
        }
        return item;
      });
      return { ...state, danhSachCuoc };
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
          for (let i = 0; i < danhSachTrungCuoc.length; i++) {
            if (item === danhSachTrungCuoc[i].loai) {
              return (result += danhSachTrungCuoc[i].diemCuoc);
            }
            return result;
          }
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
