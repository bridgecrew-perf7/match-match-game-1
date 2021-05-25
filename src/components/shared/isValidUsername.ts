export function isUsernameValid(value: string): string | boolean {
  const errors = [
    'The name cannot be empty',
    'The name cannot contains number',
    'The name cannot contain service characters',
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
