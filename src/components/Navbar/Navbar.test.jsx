import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { AuthContextProvider } from "../../context/authContext";
import "mock-local-storage";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

const TestProviders = ({ children, currentUserValue }) => (
  <AuthContextProvider currentUser={currentUserValue}>
    {children}
  </AuthContextProvider>
);

TestProviders.propTypes = {
  children: PropTypes.node.isRequired,
  currentUserValue: PropTypes.string,
};

describe("Navbar component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    render(
      <TestProviders>
        <Navbar />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(
      <TestProviders>
        <Navbar />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
    expect(container.firstChild.classList).toContain("navbar");
    expect(container.querySelector(".link--logo")).not.toBeNull();
  });

  it("renders menu without currentUser", () => {
    render(
      <TestProviders>
        <Navbar />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    const enterLink = screen.queryByText("Entrar");
    expect(enterLink).not.toBeNull();
  });

  it("renders menu with currentUser", () => {
    localStorage.setItem("userMarvel", JSON.stringify("fcoronel"));

    render(
      <TestProviders currentUserValue="fcoronel">
        <Navbar />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    const exitLink = screen.queryByText("Salir");
    expect(exitLink).not.toBeNull();
    const enterLink = screen.queryByText("Entrar");
    expect(enterLink).toBeNull();
  });
});
