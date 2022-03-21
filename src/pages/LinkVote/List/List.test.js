import { render } from "@testing-library/react";
import List from "../List";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  }),
}));

test("List page render corretly", () => {
  render(<List />);
});
