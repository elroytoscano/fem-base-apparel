const emailInput = document.getElementById('email') as HTMLInputElement;
const buttonInput = document.getElementById('submitBtn') as HTMLButtonElement;
const validationIcon = document.getElementById(
  'validation-icon'
) as HTMLSpanElement;
const validationText = document.getElementById(
  'validation-text'
) as HTMLDivElement;

export { emailInput, buttonInput, validationText, validationIcon };
