export function isValidPassword(value: string): string | boolean {
  const errors = [
    `The password cannot be empty`,
    `The number of characters must be more than 8 characters`,
    `The number of characters must be less than 30 characters`,
  ];

  if (value === '') {
    return errors[0];
  }

  if (value.length < 8) {
    return errors[1];
  }

  if (value.length >= 30) {
    return errors[2];
  }

  return true;
}
