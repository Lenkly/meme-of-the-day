import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the whole fucking app", () => {
  render(<App />);
  const h1 = screen.getByText("Meme of the Day");
  expect(h1).toBeInTheDocument();
});
