import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Add from "../Add";

// beforeEach(() => {
//   render(<Add />);
// });

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

test("Add page render corretly", () => {
  const { container } = render(<Add />);

  const addPageTitle = container.getElementsByClassName("title");
  expect(addPageTitle.textContent).not.toBe(null);

  expect(screen.getByPlaceholderText(/alphabet/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/abc.xyz/i)).toBeInTheDocument();

  const addButton = screen.getByTestId("add");
  expect(addButton).toBeEnabled();

  expect(screen.getAllByRole("textbox")).toHaveLength(2);

  expect(screen.getAllByRole("textbox")[0]).toHaveValue("");
  expect(screen.getAllByRole("textbox")[1]).toHaveValue("");

  // Change
  userEvent.type(screen.getAllByRole("textbox")[0], "test");
  userEvent.type(screen.getAllByRole("textbox")[1], "http://localhost:3000/");
});
