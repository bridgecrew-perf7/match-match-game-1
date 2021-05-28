export const getFromLocalStorage = (
  key: string,
  defaultValue: string,
): string => {
  const req = localStorage.getItem(key);
  if (req) {
    const parse = JSON.parse(req);
    return parse;
  }

  return defaultValue;
};
