import { render, screen } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import HomeRoute from "./HomeRoute";

import { setupServer } from "msw/node";
import { rest } from "msw";
import { MemoryRouter } from "react-router-dom";

const handlers = [
  rest.get("/api/repositories", (req, res, ctx) => {
    const language = req.url.searchParams.get("q").split("language:")[1];
    console.log(language);

    return res(
      ctx.json({
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => {
  // console.log("beforeAll");
  server.listen();
});

afterEach(() => {
  // console.log("afterEach");
  server.resetHandlers();
});

afterAll(() => {
  // console.log("afterAll");
  server.close();
});

test("Renders 2 links for each language", async () => {
  /* <MemoryRouter/> is needed for <Link/> */
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  /* screen.debug(); */

  await pause();

  /* // screen.debug();
    Loop over each language, 
    make sure seeing 2 links, 
    assert 2 links having correct full_name
  */
  const languageArr = [
    "javascript",
    "typescript",
    "rust",
    "go",
    "python",
    "java",
  ];

  for (const language of languageArr) {
    const linkArr = await screen.findAllByRole("link", {
      name: new RegExp(`${language}_`),
    });

    expect(linkArr).toHaveLength(2);
    expect(linkArr[0]).toHaveTextContent(`${language}_one`);
    expect(linkArr[1]).toHaveTextContent(`${language}_two`);
    expect(linkArr[0]).toHaveAttribute("href", `/repositories/${language}_one`);
    expect(linkArr[1]).toHaveAttribute("href", `/repositories/${language}_two`);
  }
});

const pause = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 300);
  });
