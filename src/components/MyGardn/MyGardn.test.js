import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import MyGardn from "./MyGardn";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <MyGardn />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
