import { render, screen } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import HomeRoute from "./HomeRoute";

import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter, MomoryRouter } from "react-router-dom";

const handlers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const query = req.url.searchParams.get("q");
    /* console.log(query); */

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: "full name!" },
          { id: 2, full_name: "other name" },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
  console.log("beforeAll");
});

afterEach(() => {
  server.resetHandlers();
  console.log("afterEach");
});

afterAll(() => {
  server.close();
  console.log("afterAll");
});

test("Renders 2 links for each language", () => {
  /* <MemoryRouter/> is needed for <Link/> */
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  /* screen.debug(); */
  /* 
    Loop over each language, 
    make sure seeing 2 links, 
    assert 2 links having correct full_name
  */
});
