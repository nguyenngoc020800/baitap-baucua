import Banchoi from "./BauCua/Banchoi";
// import Convat from './BauCua/Convat';
import Tongdiem from "./BauCua/Tongdiem";
import XucXac from "./BauCua/XucXac";
function App() {
  return (
    <div
      style={{ minHeight: "100vh", color: "#fff" }}
      className="container bg-dark "
    >
      <h1 style={{ textAlign: "center" }}>Bài tập bầu cua</h1>
      <div className="d-flex justify-content-center">
        <Tongdiem />
      </div>
      <div className="row">
        <div className="col-sm-9">
          <Banchoi />
        </div>
        <div className="col-sm-3 d-flex align-items-center ">
          <XucXac />
        </div>
      </div>
    </div>
  );
}

export default App;
