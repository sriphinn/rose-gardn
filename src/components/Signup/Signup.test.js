import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Signup from "./Signup";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});