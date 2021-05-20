import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import EditLog from "./EditLog";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <EditLog />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});