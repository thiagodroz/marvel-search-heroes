import React from 'react';
import { render } from '@testing-library/react';

import { comics } from 'test/testing-variables';
import { HeroComics } from './HeroComics';
import * as hook from './HeroComics.hook';

jest.mock('./HeroComics.hook');

describe('HeroComics spec', () => {
  beforeEach(() => {
    hook.useHeroComics.mockClear();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should render correct message if list is loading', () => {
    hook.useHeroComics.mockReturnValue({ comics: { loading: true } });

    const { findByText } = render(<HeroComics />);

    expect(findByText('Carregando lançamentos...')).toBeTruthy();
  });

  it(`should render an error message if list fetch isn't successful`, () => {
    hook.useHeroComics.mockReturnValue({
      comics: { loading: false, success: false, error: new Error() },
    });

    const { findByText } = render(<HeroComics />);

    expect(
      findByText(
        'Tivemos um problema ao obter os quadrinhos deste personagem.',
      ),
    ).toBeTruthy();
  });
  it('should render the correct comic if fetch is successful', () => {
    hook.useHeroComics.mockReturnValue({
      comics: { loading: false, success: true, value: comics },
    });

    const { findByText } = render(<HeroComics />);

    expect(findByText(comics[0].title)).toBeTruthy();
  });
});
