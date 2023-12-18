import { render, screen } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

const pause = () =>
  new Promise((resolve, reject) => {
    console.log("pause...");
    setTimeout(resolve, 300);
  });

function renderComponent() {
  return render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
}

describe("When user is NOT logged in", () => {
  createServer([
    {
      path: "/api/user",
      resp: () => {
        user: null;
      },
    },
  ]);
  /* createServer() > GET '/api/user' > {user: null} */
  test("[sign in] / [sign up] are visible", async () => {
    renderComponent();

    /*
    screen.debug();
    await pause();
    screen.debug();
    */

    await screen.findAllByRole("link");
  });

  test("[sign out] is NOT visible", async () => {
    renderComponent();
    await screen.findAllByRole("link");
  });
});

describe("When user is logged in", () => {
  createServer([
    {
      path: "/api/user",
      resp: () => ({ user: { id: 2, email: "milton@gmail.com" } }),
    },
  ]);
  /* createServer() > GET '/api/user' > {user: {id: 2, email: 'milton@gmail.com'} } */
  test("[sign in] / [sign up] are NOT visible", async () => {
    renderComponent();
  });

  test("[sign out] visible", async () => {
    renderComponent();
  });
});
