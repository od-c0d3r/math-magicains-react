import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import App from '../components/app/App';

test('Full app rendering/navigating pages', () => {
  const history = createMemoryHistory();
  render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>,
  );

  expect(screen.getByText(/if you were to play/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Calculator/i), leftClick);

  expect(screen.getByText(/Lets Do some math !/i)).toBeInTheDocument();
});
