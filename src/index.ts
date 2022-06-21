import './styles/main.scss';
import './template.html';

import {
  buttonInput,
  emailInput,
  validationIcon,
  validationText,
} from './code/selectElements';
import CustomError from './code/CustomError';
import { emailValidation } from './code/validators';

const inputChange = () => {
  validationIcon.classList.contains('error') &&
    validationIcon.classList.remove('error');
  validationText.classList.contains('error') &&
    validationText.classList.remove('error');
  emailInput.classList.contains('error') &&
    emailInput.classList.remove('error');
};

emailInput.addEventListener('input', inputChange);

const buttonClick = (e: MouseEvent) => {
  e.preventDefault();
  try {
    emailValidation(emailInput);
    alert('Email submitted successfully');
    emailInput.value = '';
  } catch (error) {
    if (error instanceof CustomError) {
      validationIcon.classList.add('error');
      validationText.innerText = error?.message;
      validationText.classList.add('error');
      emailInput.classList.add('error');
    }
  }
};

buttonInput.addEventListener('click', buttonClick);
