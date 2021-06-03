export const isAnyBlank = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (!args[i]) return true;
  }
  return false;
};

export const isPasswordValid = (password) => {
  const pwArray = password.split('');
  const lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppercaseArray = lowercaseArray.map((el) => el.toUpperCase());
  const numberArray = '0123456789'.split('');
  const symbolArray = ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`.split('');
  symbolArray.push('`');
  let lengthResult = false;
  if (pwArray.length >= 8) lengthResult = true;
  const lowercaseResult = pwArray.some((el) => lowercaseArray.includes(el));
  const uppercaseResult = pwArray.some((el) => uppercaseArray.includes(el));
  const numberResult = pwArray.some((el) => numberArray.includes(el));
  const symbolResult = pwArray.some((el) => symbolArray.includes(el));
  if (
    lowercaseResult &&
    uppercaseResult &&
    numberResult &&
    symbolResult &&
    lengthResult
  )
    return true;
  else return false;
};
