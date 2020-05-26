import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Heading</h1>, document.getElementById("root"));
// ............(what do i want to render, where do i render)

let newPara = document.createElement("p");
newPara.innerHTML = "This is a paragraph";
document.getElementById("root").append(newPara);
