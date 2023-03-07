export function validateUsername(username: unknown): username is string {
  return typeof username === 'string' && username.length >= 3;
}

export function validateEmail(email: unknown): email is string {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return typeof email === 'string' && emailRegex.test(email);
}

export function validatePassword(password: unknown): password is string {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return typeof password === 'string' && passwordRegex.test(password);
}
