import { render, screen } from "@testing-library/react";

import { Text } from "./Text";

const child = "test child";

test("Render Text default", () => {
  render(<Text>{child}</Text>);
  const linkElement = screen.getByText(child);
  expect(linkElement).toBeInTheDocument();
});

test("Render Text h1", () => {
  render(<Text h="1">{child}</Text>);
  const linkElement = screen.getByText(child);
  expect(linkElement).toBeInTheDocument();
});

test("Render Text h2", () => {
  render(<Text h="2">{child}</Text>);
  const linkElement = screen.getByText(child);
  expect(linkElement).toBeInTheDocument();
});

test("Render Text h3", () => {
  render(<Text h="3">{child}</Text>);
  const linkElement = screen.getByText(child);
  expect(linkElement).toBeInTheDocument();
});
