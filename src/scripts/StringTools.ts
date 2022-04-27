//Validate if is an empty string
export const IsEmptyString = (text: string | undefined) => {
  if (text === undefined || text == null) {
    return true;
  }
  const textCheck = text.toString();
  if (
    textCheck === undefined ||
    textCheck == null ||
    textCheck.trim().length === 0
  ) {
    return true;
  }
  return false;
};

//Validate if is a valid email
export const IsValidEmail = (email: any) => {
  if (email === undefined || email == null) {
    return false;
  }
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

//Validate if is a valid phone number
export const IsValidPhoneNumber = (number: any) => {
  if (number === undefined || number == null) {
    return false;
  }
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(number);
};

//Validate if is a valid numeric value
export const isNumeric = (str: string): boolean => {
  if (typeof str !== 'string') return false; // we only process strings!
  return (
    !isNaN(parseInt(str)) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
};

//Format a string to a valid phone number
export const formatToPhoneNumber = (phoneNumberString: string): string => {
  if (phoneNumberString === undefined) {
    return '';
  }
  if (phoneNumberString.length === 1 && !isNumeric(phoneNumberString)) {
    return '';
  }
  const input = phoneNumberString.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
  const areaCode = input.substring(0, 3);
  const middle = input.substring(3, 6);
  const last = input.substring(6, 10);

  if (input.length > 6) {
    phoneNumberString = `(${areaCode}) ${middle} - ${last}`;
  } else if (input.length > 3) {
    phoneNumberString = `(${areaCode}) ${middle}`;
  } else if (input.length > 0) {
    phoneNumberString = `(${areaCode}`;
  }
  return phoneNumberString;
};

//Format URL
export const formatToURL = (urlCheck: string) => {
  let returnURL = urlCheck;
  returnURL = returnURL
    .toLowerCase()
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z 0-9\-]/g, '');
  return returnURL;
};

export const numberPriceFormatter = new Intl.NumberFormat('es-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

//Format a Number to Price
export const formatNumberToPrice = (number: any) => {
  return numberPriceFormatter.format(number).toString().replace('$', '');
};