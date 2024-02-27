import { useState } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";

export default function App() {
  const [count, setCount] = useState(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
      <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add Book
        </button>
      </div>
      <br />
      <hr />
      <NameInput />
    </div>
  );
}
