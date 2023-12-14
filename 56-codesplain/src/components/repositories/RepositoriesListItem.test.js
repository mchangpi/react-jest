import { screen, render /*, within*/ } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import RepositoriesListItem from "./RepositoriesListItem";

import { MemoryRouter } from "react-router-dom";

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

test("Shows a link to the github homepage for this repo", async () => {
  renderComponent();

  /*
  screen.debug();
  await pause();
  screen.debug();
  */

  await screen.findByRole("img", { name: "Javascript" });
});

/*
const pause = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 300);
  });
};
*/
