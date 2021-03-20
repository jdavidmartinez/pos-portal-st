import { render } from '@testing-library/react';

import Box from '../../../components/UI/Box/Box';

describe('Box UI component >> Unit test', () => {
  test('renders without crashing', () => {
    render(<Box />);
  });
});
