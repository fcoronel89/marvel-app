import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Layout from "./Layout";
import { AuthContextProvider } from "../context/authContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "mock-local-storage";
import Home from "./Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

const TestProviders = ({ children, currentUserValue = null }) => (
  <AuthContextProvider currentUser={currentUserValue}>
    {children}
  </AuthContextProvider>
);

TestProviders.propTypes = {
  children: PropTypes.node.isRequired,
  currentUserValue: PropTypes.string,
};

describe("Layout component", () => {
  afterEach(cleanup);
  it("renders without crashing", () => {
    render(
      <TestProviders>
        <Layout />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(
      <TestProviders>
        <Layout />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
    expect(container.querySelector(".wrapper-container")).not.toBeNull();
    expect(container.querySelector(".welcome-container")).not.toBeNull();
  });

  it('renders "Bienvenido"', () => {
    render(
      <TestProviders>
        <Layout />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
    screen.getByText("Bienvenido");
  });

  it("renders with currentUser value", () => {
    localStorage.setItem("userMarvel", JSON.stringify("fcoronel"));

    render(
      <TestProviders currentUserValue="fcoronel">
        <Layout />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    expect(screen.queryByText("Bienvenido")).toBeNull();
  });

  it("renders home page", () => {
    render(
      <TestProviders currentUserValue="fcoronel">
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={["/"]}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
              </Route>
            </Routes>
          </MemoryRouter>
        </QueryClientProvider>
      </TestProviders>
    );

    const personajesElement = screen.queryByText("Personajes");
    expect(personajesElement).not.toBeNull();
  });
});
