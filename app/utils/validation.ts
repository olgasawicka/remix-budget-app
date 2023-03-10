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

export function validateInputs(input: { [k: string]: FormDataEntryValue }) {
  let validationErrors: { [k: string]: string } = {};
  if (input.username && !validateUsername(input.username)) {
    validationErrors.username = 'Username must be at least 3 characters long.';
  }

  if (!validateEmail(input.email)) {
    validationErrors.email = 'Email is invalid.';
  }

  if (!validatePassword(input.password)) {
    validationErrors.password =
      'Passwords must have at least 8 characters and contain at least one letter and one number';
  }

  if (Object.keys(validationErrors).length > 0) {
    throw validationErrors;
  }
  return true;
}
