import { CustomErrorType } from '../types/CustomErrorType';

class CustomError extends Error implements CustomErrorType {
  input: string;
  message: string;

  constructor(input: string, message: string) {
    super(message);
    this.input = input;
    this.message = message;
  }
}

export default CustomError;
