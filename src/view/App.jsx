// import { useState } from "react";
import TopBar from "./TopBar";
import NameInput from "./NameInput";
// import Books from "./Books";
import Counter from "./Counter"
import Headline from "./Headline";

export default function App() {
  // const [booksCount, setBooksCount] = useState(2);

  return (
    <div className="app">
      <TopBar>React Components are state machines</TopBar>
      <Headline />
      {/* <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1> */}
      <Counter counterType={"Books"}/>
      <Counter counterType={"Costumer"}/>
      <Counter counterType={"Employee"}/>
      
      {/* <div className="hbox space-between mt20">
        <h3 className="paragraph">Book counter: {booksCount}</h3>
        <button className="button" onClick={() => setBooksCount(booksCount + 1)}>
          add Book
        </button>
      </div> */}
      <br />
      <hr />
      <NameInput />
    </div>
  );
}
