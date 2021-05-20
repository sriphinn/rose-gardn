import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import LogItem from "./LogItem";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <LogItem />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});