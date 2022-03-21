import React from "react";
import { render } from "@testing-library/react";
import Toast from "../Toast";

test("Toast render corretly", () => {
  const { container } = render(<Toast />);

  expect(container.firstChild).toHaveClass("toast");
});
