import { urlBuilder } from './url-builder';

describe('urlBuilder spec', () => {
  it('should return an url that contains the address and the passed params', () => {
    const result = urlBuilder('/characters', {
      page: 1,
      limit: 20,
    });

    expect(result).toMatch(/\/characters/);
    expect(result).toMatch(/page=1/);
    expect(result).toMatch(/limit=20/);
  });

  it('should omit undefined params', () => {
    const result = urlBuilder('/', {
      page: undefined,
    });

    expect(result).not.toMatch(/page=/);
  });
});
