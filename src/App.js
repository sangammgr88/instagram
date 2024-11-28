import LeftSide from "./Components/LeftSide";
import MiddleSide from "./Components/MiddleSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className="w-full flex  justify-between pl-6">
      <LeftSide/>
      <MiddleSide />
      <RightSide />
    </div>
  );
}

export default App;
