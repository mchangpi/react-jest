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
  const repoMock = {
    full_name: "facebook/react",
    language: "Javascript",
    description: "A js library",
    owner: "facebook",
    name: "react",
    html_url: "https://github.com/facebook/react",
  };

  /* <MemoryRouter/> is needed for <Link/> of <RepositoriesListItem/> */
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repoMock} />
    </MemoryRouter>
  );
}

test(
  "1.(Fix act warnning: findByRole()) " +
    "Shows a link to the github homepage for this repo",
  async () => {
    renderComponent();

    /* // just show why <FileIcon/> cause act() warning
    screen.debug();
    await pause();
    screen.debug();
    */

    /* 1st way to fix act() warning */
    const fileIconComp = await screen.findByRole("img", {
      name: /javascript/i,
    });
    screen.debug(fileIconComp);
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
