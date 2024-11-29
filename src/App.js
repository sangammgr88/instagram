import LeftSide from "./Components/LeftSide";
import MiddleSide from "./Components/MiddleSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className="w-full grid grid-cols-7 justify-between pl-6">
      <div className=""><LeftSide/></div>
     <div className="col-span-4"><MiddleSide/></div> 
     <div><RightSide /></div> 
    </div>
  );
}

export default App;
