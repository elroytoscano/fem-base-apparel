import CustomError from './CustomError';
import { EMAIL_INCORRECT, EMAIL_REQUIRED } from './constants';

const checkValue = (input: HTMLInputElement, message: string) => {
  if (input.value.trim() === '' || input.value === '') {
    throw new CustomError(input.value, message);
  }
};

export const emailValidation = (input: HTMLInputElement) => {
  checkValue(input, EMAIL_REQUIRED);

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(input.value)) {
    throw new CustomError(input.value, EMAIL_INCORRECT);
  }
};
