import { within } from '@testing-library/dom';

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);
  if (elements.length === quantity)
    return {
      pass: true,
    };

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} element(s), but found ${elements.length} instead! `,
  };
}

expect.extend({ toContainRole });

export { toContainRole };
