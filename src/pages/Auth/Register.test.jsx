import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import Register from "./Register";
import { TestProviders } from "../../utils/TestProviders";
import { MemoryRouter } from "react-router-dom";

describe("Register component", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders without crashing", () => {
    render(
      <TestProviders>
        <Register />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );
  });

  it("renders with the correct CSS classes", () => {
    const { container } = render(
      <TestProviders>
        <Register />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    expect(container.firstChild.classList).toContain("auth");
    expect(container.querySelector(".auth-container")).not.toBeNull();
  });

  it("renders register form without errors", () => {
    render(
      <TestProviders>
        <Register />
      </TestProviders>,
      { wrapper: MemoryRouter }
    );

    const userNameInput = screen.getByLabelText("Usuario");
    const passwordInput = screen.getByLabelText("Contraseña");
    const emailInput = screen.getByLabelText("Email");

    expect(userNameInput).not.toBeNull();
    expect(passwordInput).not.toBeNull();
    expect(emailInput).not.toBeNull();

    expect(userNameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    expect(emailInput.value).toBe("");

    const submitButton = screen.getByText("Crear");

    expect(submitButton).not.toBeNull();
    expect(submitButton.disabled).toBe(false);
  });
});
