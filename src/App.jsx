import "./App.css";
import Counter from "./Counter";
import Clock from "./Clock";
import MouseClicker from "./MouseClicker";
import { MyComponent } from "./Mycomponent";
import { FocusableInput } from "./FocusableInput";
function App() {
  return (
    <>
      <div>
        <Counter />
        <Clock />
        <MouseClicker />
        <MyComponent />
        <FocusableInput />
      </div>
    </>
  );
}

export default App;
