export function isValidEmail(value: string): string | boolean {
  const errors = [
    'Имя не может быть пустым',
    'должен соответствовать стандартному правилу формированию email',
  ];

  const emailValidation =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|ru|by|museum)\b/;

  if (value === '') {
    return errors[0];
  }
  if (!emailValidation.test(value)) {
    return errors[1];
  }

  return true;
}
