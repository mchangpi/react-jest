import { render, screen } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "../../test/server";
import AuthButtons from "./AuthButtons";

/* createServer() > GET '/api/user' > {user: null} */
test("When user is NOT logged in, [sign in] / [sign up] are visible", async () => {
  /*  */
});

test("When user is NOT logged in, [sign out] is NOT visible", async () => {
  /*  */
});

/* createServer() > GET '/api/user' > {user: {id: 2, email: 'milton@gmail.com'} } */
test("When user is logged in, [sign in] / [sign up] are NOT visible", async () => {
  /*  */
});

test("When user is logged in, [sign out] visible", async () => {
  /*  */
});