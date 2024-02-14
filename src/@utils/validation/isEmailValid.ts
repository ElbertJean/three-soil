/**
 * Checks if the given email is valid.
 *
 * @param {string} email - The email to be checked.
 * @return {boolean} True if the email is valid, false otherwise.
 */
function isEmailValid (email: string) {
  const regex: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

export default isEmailValid;