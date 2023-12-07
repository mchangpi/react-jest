import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

const roles = ['link',
  'button',
  'contentinfo',
  'heading',
  'banner',
  'img',
  'checkbox',
  'spinbutton',
  'radio',
  'textbox',
  'listitem',
  'list',
  // 'listgroup'
];

test('Find elements by role', async () => {
  render(<App />);

  for(const role of roles){
    const element = screen.getByRole(role);

   if (!element){
      console.log(role, 'NOT exists !!');
   }

    expect(element).toBeInTheDocument();
  }
});
