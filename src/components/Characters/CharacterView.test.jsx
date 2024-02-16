import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { afterEach, describe, it } from "vitest";
import CharacterView from "./CharacterView";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("CharacterView", () => {
  afterEach(cleanup);

  it("renders without crashing", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CharacterView />
      </QueryClientProvider>,
      { wrapper: MemoryRouter }
    );
    screen.getByText("Cargando");
  });

});


