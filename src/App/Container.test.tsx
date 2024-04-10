import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from 'braid-design-system/test';

import { Container } from './Container';

it('should allow a user to select an option and clear it', async () => {
  const user = userEvent.setup();

  render(
    <BraidTestProvider>
      <Container />
    </BraidTestProvider>,
  );

  let input = screen.getByLabelText('Character');
  await user.click(input);

  const option = document.getElementById('character-input-item-1')!;
  await user.click(option);

  // Ensure the select has reached the parent
  expect(screen.getByTestId('selected-target')).toHaveTextContent(
    'frodothegreat',
  );

  const clear = screen.getByRole('button', { name: 'Clear' });
  await user.click(clear);

  input = screen.getByLabelText('Character');
  expect(input).toHaveValue('');
});
