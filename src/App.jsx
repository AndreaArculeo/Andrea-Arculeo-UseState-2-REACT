import "./App.css";
import Counter from "./Counter";
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";
import { MyComponent } from "./Mycomponent";
import { FocusableInput } from "./FocusableInput";
import Colors from "./Colors";

function App() {
  const colorArray = [
    { id: 1, name: "Red" },
    { id: 2, name: "Yellow" },
    { id: 3, name: "Blue" },
    { id: 4, name: "Green" },
    { id: 5, name: "Purple" },
  ];

  return (
    <>
      <div>
        <Counter />
        <Clock />
        <MouseClicker />
        <MyComponent />
        <FocusableInput />
        <Colors colors={colorArray} />
      </div>
    </>
  );
}

export default App;
