export function isUsernameValid(value: string, type: string): string | boolean {
  const errors = [
    `The ${type} cannot be empty`,
    `The ${type} cannot contains number`,
    `The ${type} cannot contain service characters`,
  ];

  if (value === '') {
    return errors[0];
  }
  if (/\d/.test(value)) {
    return errors[1];
  }
  if (!/^[a-zA-zА-Я]+$/i.test(value)) {
    return errors[2];
  }

  return true;
}
