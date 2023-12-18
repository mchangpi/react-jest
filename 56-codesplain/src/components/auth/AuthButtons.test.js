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

async function renderComponent() {
  render(
    <MemoryRouter>
      <AuthButtons />
    </MemoryRouter>
  );
  await screen.findAllByRole("link");
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
    await renderComponent();

    /* // Fetch and check the rendered components
    screen.debug();
    await pause();
    screen.debug();
    */

    const signInBtn = screen.getByRole("link", { name: /sign in/i });
    const signUpBtn = screen.getByRole("link", { name: /sign up/i });

    expect(signInBtn).toBeInTheDocument();
    expect(signInBtn).toHaveAttribute("href", "/signin");
    expect(signUpBtn).toBeInTheDocument();
    expect(signUpBtn).toHaveAttribute("href", "/signup");
  });

  test("[sign out] is NOT visible", async () => {
    await renderComponent();

    const signOutBtn = screen.queryByRole("link", { name: /sign out/i });
    expect(signOutBtn).not.toBeInTheDocument();
  });
});

describe.only("When user is logged in", () => {
  createServer([
    {
      path: "/api/user",
      resp: () => ({ user: { id: 2, email: "milton@gmail.com" } }),
    },
  ]);

  test("[sign in] / [sign up] are NOT visible", async () => {
    await renderComponent();

    const signInBtn = screen.queryByRole("link", { name: /sign in/i });
    const signUpBtn = screen.queryByRole("link", { name: /sign up/i });

    expect(signInBtn).not.toBeInTheDocument();
    expect(signUpBtn).not.toBeInTheDocument();
  });

  test("[sign out] visible", async () => {
    await renderComponent();

    const signOutBtn = screen.getByRole("link", { name: /sign out/i });

    expect(signOutBtn).toBeInTheDocument();
    expect(signOutBtn).toHaveAttribute("href", "/signout");
  });
});
