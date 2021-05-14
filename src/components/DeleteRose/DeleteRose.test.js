import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import DeleteRose from "./DeleteRose";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <DeleteRose />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});