import { useState } from "react";

const Counter = ({counterType}) => {
    const [count, setCount] = useState(0);
    return(
        <div className="hbox space-between mt20">
        <h3 className="paragraph"> {counterType } counter: {count}</h3>
        <button className="button" onClick={() => setCount(count + 1)}>
          add {counterType}
        </button>
      </div>
    )
}

export default Counter;