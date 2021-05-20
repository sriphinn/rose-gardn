import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import DeleteLog from "./DeleteLog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <DeleteLog />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});