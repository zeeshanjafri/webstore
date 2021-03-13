import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test link functionalty example", () => {
  render(<App />);
  const linkElement = screen.getByText(/login/i); //TODO: GetById() -> Need to create id/dev-test ids
  expect(linkElement).toBeInTheDocument(); //TODO: Change to .toBeTruthy()
});
