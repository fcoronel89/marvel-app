import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    render(<Footer />);
  });

  it('renders copyright text', () => {
    render(<Footer />);
    screen.getByText("Copyright © 2024 Marvel App.");
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild.classList).toContain("footer");
  });
});
