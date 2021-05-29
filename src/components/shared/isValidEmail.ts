const emailLength = 30;

const emailValidation =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function isValidEmail(value: string): string | boolean {
  const errors = [
    'Email cannot be empty',
    'Must comply with the standard email generation rule ',
    `The email of characters must be less than ${emailLength} characters`,
  ];

  if (value === '') {
    return errors[0];
  }
  if (!new RegExp(emailValidation).test(value)) {
    return errors[1];
  }
  if (value.length >= emailLength) {
    return errors[2];
  }

  return true;
}
