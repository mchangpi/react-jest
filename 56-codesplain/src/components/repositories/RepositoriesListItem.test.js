import {
  screen,
  render,
  act /*, within*/,
  findByRole,
} from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import RepositoriesListItem from "./RepositoriesListItem";

import { MemoryRouter } from "react-router-dom";

const pause = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 300);
  });
};

function renderComponent() {
  const repository = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: {
      login: "facebook",
    },
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  /* <MemoryRouter/> is needed for <Link/> of <RepositoriesListItem/> */
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );
  return { repository };
}

test(
  "1.(Fix act warnning: findByRole()) " +
    "Shows a link to the github homepage for this repo",
  async () => {
    const { repository } = renderComponent();

    /* // just show why <FileIcon/> cause act() warning
    screen.debug();
    await pause();
    screen.debug();
    */

    /* 1st way to fix act() warning */
    const fileIconComp = await screen.findByRole("img", {
      name: /javascript/i,
    });
    // screen.debug(fileIconComp);

    /* TDD: Test, Fail, Dev, OK! */
    const repoLink = screen.getByRole("link", { name: /github repository/i });
    /* screen.debug(repoLink); */
    expect(repoLink).toHaveAttribute("href", repository.html_url);
  }
);

/* // 2nd way to fix act() warning 
jest.mock("../tree/FileIcon", () => {
  const FileIconMock = () => {
    return <img alt="Javascript Mock" />;
  };
  return FileIconMock;
});
test(
  "2.(Fix act warnning: jest.mock())" +
    "Shows a link to the github homepage for this repo",
  async () => {
    renderComponent();

    const imgMock = await screen.findByRole("img", { name: /javascript/i });
    screen.debug(imgMock);
  }
);
*/

test(
  "3.(Fix act warnning: act())" +
    "Shows a link to the github homepage for this repo",
  async () => {
    renderComponent();

    await act(async () => {
      await pause();
    });
  }
);

test("Shows a FileIcon with the appropriate icon", async () => {
  renderComponent();

  const jsIcon = await screen.findByRole("img", { name: "Javascript" });

  /* 
  <i role="img" aria-label="JavaScript" 
    class="shrink w-6 pt-1 icon js-icon medium-yellow">
  </i> 
  */
  expect(jsIcon).toHaveClass("js-icon");
});

test("Shows a Link to the code editor page", async () => {
  const { repository } = renderComponent();

  await screen.findByRole("img", { name: "Javascript" });

  const link = await screen.findByRole("link", {
    name: new RegExp(repository.owner.login),
  });

  /*
  <Link to={`/repositories/${full_name}`} className="text-xl">
    {owner.login}/<span className="font-bold">{name}</span>
  </Link>
  */
  expect(link).toHaveAttribute("href", `/repositories/${repository.full_name}`);
});
