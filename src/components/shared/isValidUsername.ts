export function isUsernameValid(value: string, type: string): string | boolean {
  const errors = [
    `The ${type} cannot be empty`,
    `The ${type} cannot contains number`,
    `The ${type} cannot contain service characters`,
    `The number of characters must be less than 30 characters`,
  ];

  if (value === '') {
    return errors[0];
  }

  if (!/^[^~!@#$%*()_—+=|:;"'`<>,.?/^]*$/g.test(value)) {
    return errors[2];
  }

  if (/^\d+$/g.test(value)) {
    return errors[1];
  }

  if (value.length >= 30) {
    return errors[3];
  }

  return true;
}
