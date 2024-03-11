import { useState } from "react";

const Headline = (text) => {
    const [headline, setHeadline] = useState("<<<< Stateful Bookstore >>>>");
    return(
    <h1
        className="headline white-text">{headline}
    </h1>

    )
}

export default Headline;
