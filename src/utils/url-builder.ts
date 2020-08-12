export const urlBuilder = (
  address: string,
  params: Record<string, any>,
): string => {
  const encodedParams = Object.keys(params)
    .filter(key => params[key] !== undefined)
    .map(key => `${key}=${params[key]}`)
    .join('&');

  return `${address}?${encodedParams}`;
};
