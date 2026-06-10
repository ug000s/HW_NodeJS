import {describe, it, expect} from '@jest/globals';
import {CheckCreditCardNumber, CheckDateFormatEU, checkDateFormatUS, checkPhoneNumber, checkLessEquals255} from './validate.js';

describe('CheckCreditCardNumber', () => {
    it('should return true for valid credit card number', () => {
        expect(CheckCreditCardNumber('12345678')).toBeTruthy();
        expect(CheckCreditCardNumber('1234567812345678')).toBeTruthy();
        expect(CheckCreditCardNumber('1234567812')).toBeTruthy();
    });

    it('should return false for invalid credit card number', () => {
        expect(CheckCreditCardNumber('12345678123456789')).toBeFalsy();
        expect(CheckCreditCardNumber('1234567')).toBeFalsy();
        expect(CheckCreditCardNumber('12345678901234567123441')).toBeFalsy();
        expect(CheckCreditCardNumber('1234567A')).toBeFalsy();
    });
});

describe('CheckDateFormatEU', () => {
    it('should return true for valid date format (EU)', () => {
        expect(CheckDateFormatEU('05.01.2026')).toBeTruthy();
        expect(CheckDateFormatEU('25.01.2026')).toBeTruthy();
        expect(CheckDateFormatEU('30.02.2026')).toBeTruthy();
        expect(CheckDateFormatEU('31.06.2025')).toBeTruthy();
    });

    it('should return false for invalid date format (EU)', () => {
        expect(CheckDateFormatEU('32.06.2025')).toBeFalsy();
        expect(CheckDateFormatEU('12.15.2025')).toBeFalsy();
        expect(CheckDateFormatEU('12/01/2025')).toBeFalsy();
        expect(CheckDateFormatEU('12-01-2025')).toBeFalsy();
        expect(CheckDateFormatEU('2026.12.01')).toBeFalsy();
    });
});

describe('checkDateFormatUS', () => {
    it('should return true for valid date format (US)', () => {
        expect(checkDateFormatUS('2025-10-15')).toBeTruthy();
        expect(checkDateFormatUS('2025-07-05')).toBeTruthy();
        expect(checkDateFormatUS('2025-12-01')).toBeTruthy();
        expect(checkDateFormatUS('2025-01-28')).toBeTruthy();
        expect(checkDateFormatUS('2025-12-31')).toBeTruthy();
    });

    it('should return false for invalid date format (US)', () => {
        expect(checkDateFormatUS('2025-00-15')).toBeFalsy();
        expect(checkDateFormatUS('2025-13-15')).toBeFalsy();
        expect(checkDateFormatUS('2025-12-00')).toBeFalsy();
        expect(checkDateFormatUS('2025-12-32')).toBeFalsy();
        expect(checkDateFormatUS('2025-12-0')).toBeFalsy();
    });
});

describe('checkPhoneNumber', () => {
    it('should return true for valid phone number', () => {
        expect(checkPhoneNumber('+99(99)9999-9999')).toBeTruthy();
        expect(checkPhoneNumber('+99(01)9999-9999')).toBeTruthy();
    });

    it('should return false for invalid phone number', () => {
        expect(checkPhoneNumber('99(01)9999-9999')).toBeFalsy();
        expect(checkPhoneNumber('+9(01)9999-9999')).toBeFalsy();
        expect(checkPhoneNumber('+99(1)9999-9999')).toBeFalsy();
        expect(checkPhoneNumber('+99(12)999-9999')).toBeFalsy();
        expect(checkPhoneNumber('+99(12)9999-99999')).toBeFalsy();
    });
});

describe('checkLessEquals255', () => {
    it('should return true for value less than or equal to 255', () => {
        expect(checkLessEquals255('0')).toBe(true);
        expect(checkLessEquals255('255')).toBe(true);
        expect(checkLessEquals255('5')).toBe(true);
        expect(checkLessEquals255('10')).toBe(true);
        expect(checkLessEquals255('58')).toBe(true);
        expect(checkLessEquals255('199')).toBe(true);
    });

    it('should return false for value greater than 255', () => {
        expect(checkLessEquals255('256')).toBe(false);
        expect(checkLessEquals255('1000')).toBe(false);
        expect(checkLessEquals255('a')).toBe(false);
        expect(checkLessEquals255('10a')).toBe(false);
        expect(checkLessEquals255('-2')).toBe(false);
    });
});
