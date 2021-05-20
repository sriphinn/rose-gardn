import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import RoseLog from "./RoseLog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <RoseLog />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});