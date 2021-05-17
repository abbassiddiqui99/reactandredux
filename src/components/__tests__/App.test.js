import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // Look inside the div
  // And see whether the commentbox exists.
  expect(div.innerHTML).toContain("CommentBox");
  reactDom.unmountComponentAtNode(div);
});
