import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import AddRose from "./AddRose";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <AddRose/>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
