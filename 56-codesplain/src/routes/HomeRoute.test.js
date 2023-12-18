import { render, screen } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import HomeRoute from "./HomeRoute";

import { MemoryRouter } from "react-router-dom";
import { createServer } from "../test/server";

createServer([
  {
    path: "/api/repositories",
    resp: (req, resp, ctx) => {
      const language = req.url.searchParams.get("q").split("language:")[1];
      return {
        items: [
          { id: 1, full_name: `${language}_one` },
          { id: 2, full_name: `${language}_two` },
        ],
      };
    },
  },
]);

test("Renders 2 links for each language", async () => {
  /* <MemoryRouter/> is needed for <Link/> */
  render(
    <MemoryRouter>
      <HomeRoute />
    </MemoryRouter>
  );

  /* screen.debug(); */

  /*
  const pause = () =>
    new Promise((resolve, reject) => {
      setTimeout(resolve, 300);
    });
  */
  /* await pause(); */

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
