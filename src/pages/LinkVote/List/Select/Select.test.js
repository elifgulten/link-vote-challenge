import React from "react";
import { render, screen } from "@testing-library/react";
import Select from "../Select";

test("Select render corretly", () => {
  render(<Select />);

  const mostVoted = screen.getByText(/Most Voted/i);
  expect(mostVoted).toBeInTheDocument();

  const lessVoted = screen.getByText(/Less Voted/i);
  expect(lessVoted).toBeInTheDocument();
});
