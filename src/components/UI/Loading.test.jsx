import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Loading from "./Loading";

describe("Loading component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    render(<Loading />);
  });

  it('renders "Cargando"', () => {
    render(<Loading />);
    screen.getByText("Cargando");
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(<Loading />);
    expect(container.firstChild.classList).toContain("loading");
    expect(container.firstChild.querySelector(".spinner")).not.toBeNull();
  });
});
