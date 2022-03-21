import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "../Modal";

test("Modal render corretly", () => {
  const { container } = render(<Modal />);

  expect(container.firstChild).toHaveClass("modal");

  const modalTitle = container.querySelector("span");
  expect(modalTitle.textContent).not.toBe(null);

  const button = screen.getAllByRole("button");
  expect(button).toHaveLength(2);

  const buttonOk = screen.getByText("Ok");
  expect(buttonOk).toBeInTheDocument();

  const buttonCancel = screen.getByText("Cancel");
  expect(buttonCancel).toBeInTheDocument();
});
