export const validateCanadianPostalCode = (postalCode: string): boolean => {
  const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  return regex.test(postalCode);
};

export const validateCanadianPhoneNumber = (phone: string): boolean => {
  const regex = /^(\+?1[-.]?)?\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{4})$/;
  return regex.test(phone);
};