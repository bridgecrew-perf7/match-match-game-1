export function isUsernameValid(value: string): string | boolean {
  const errors = [
    'Имя не может быть пустым',
    'Имя не может состоять из цифр',
    'Имя не может содержать служебные символы',
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
