import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Login from "./Login";
import { TestProviders } from "../../utils/TestProviders";
import { MemoryRouter } from "react-router-dom";

describe("Login component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(
      <TestProviders>
        <Login />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(
      <TestProviders>
        <Login />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    expect(container.firstChild.classList).toContain("auth");
    expect(container.querySelector(".auth-container")).not.toBeNull();
  });

  it("renders login form without errors", () => {
    render(
      <TestProviders>
        <Login />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    const userNameInput = screen.getByLabelText("Usuario");
    const passwordInput = screen.getByLabelText("Contraseña");

    expect(userNameInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();

    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");

    const submitButton = screen.getByText("Entrar");

    expect(submitButton).not.toBeNull();
    expect(submitButton.disabled).toBe(false);
  });
});
