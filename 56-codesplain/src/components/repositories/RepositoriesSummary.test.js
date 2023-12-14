import { screen, render /*, within*/ } from "@testing-library/react";
// import user from '@testing-library/user-event';
import "@testing-library/jest-dom";
import RepositoriesSummary from "./RepositoriesSummary";

test("Display the primary language of the repository", () => {
  const repositoryMock = {
    language: "Javascript",
    stargazers_count: 5,
    forks: 30,
    open_issues: 1,
  };

  render(<RepositoriesSummary repository={repositoryMock} />);

  const language = screen.getByText("Javascript");
  expect(language).toBeInTheDocument();
});
