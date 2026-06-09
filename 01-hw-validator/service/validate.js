const CheckCreditCardNumber = (number) => {
    // TODO Credit card number (8-16 digits)
    const pattern = /^\d{8,16}$/;
    return pattern.test(number);
};

const CheckDateFormatEU = (date) => {
    // TODO Date (Format: DD.MM.YYYY)
    const pattern = /^(0{1}[1-9]{1}|[12]{1}[0-9]{1}|3{1}[01]{1})\.(0{1}[1-9]|1{1}[012])\.\d{4}$/;
    return pattern.test(date);
};

const checkDateFormatUS = (date) => {
    // TODO Date format (US) YYYY-MM-DD
    const pattern = /^\d{4}-(0{1}[1-9]|1{1}[012])-(0{1}[1-9]|[12]{1}[0-9]|3{1}[01]{1})$/;
    return pattern.test(date);
};

const checkPhoneNumber = (phone) => {
    // TODO Phone Number (Format: +99(99)9999-9999)
    const pattern = /^\+\d{2}\(\d{2}\)\d{4}-\d{4}$/;
    return pattern.test(phone);
};

const checkLessEquals255 = (value) => {
    // TODO Number less and equals 255 (positive) 0-255
    const pattern = /^(0|[1-9]\d?|1\d\d|2[0-4]\d|25[0-5])$/;
    return pattern.test(value)
};

export {
    CheckCreditCardNumber,
    CheckDateFormatEU,
    checkDateFormatUS,
    checkPhoneNumber,
    checkLessEquals255
};