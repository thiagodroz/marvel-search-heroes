import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe(`HomePages's Footer spec`, () => {
  it('should match last snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
