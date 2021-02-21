export function checkInputLength(value: string): boolean {
  const trimmed = value.trim();

  if (trimmed) {
    return true;
  } else {
    return false;
  }
}

export function validateEmailValue(email: string): boolean {
  //double check
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
