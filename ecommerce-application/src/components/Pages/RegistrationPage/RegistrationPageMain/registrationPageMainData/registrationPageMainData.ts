import { emailRegExp } from '../../../../../data/constants';
import { IRegistrationPageParam } from '../../../../../types/types';
import { checkDateValidity } from '../../../../../utils/utils';

export const registrationPageMainData: IRegistrationPageParam[] = [
  {
    type: 'email',
    name: 'email',
    options: {
      validate: {
        lang: (inputValue: string): string | boolean =>
          !inputValue.match(/[а-яА-Я]/g) || 'must be en',
      },
      required: 'Required field',
      pattern: {
        value: emailRegExp,
        message: 'invalid email',
      },
    },
  },
  {
    type: 'password',
    name: 'password',
    options: {
      validate: {
        number: (inputValue: string): string | boolean =>
          !!inputValue.match(/[0-9]/g) || 'At least one number',
        uppercase: (inputValue: string): string | boolean =>
          !!inputValue.match(/[A-Z]/g) || 'At least one uppercase letter',
        lowercase: (inputValue: string): string | boolean =>
          !!inputValue.match(/[a-z]/g) || 'At least one lowercase letter',
      },
      required: 'Required field',
      minLength: {
        value: 8,
        message: 'Minimum 8 characters',
      },
    },
  },
  {
    type: 'text',
    name: 'userFirstName',
    options: {
      pattern: {
        value: /^[a-zA-Z]+[a-zA-Z']?$/,
        message: 'No special characters or numbers',
      },
      required: 'Required field',
      minLength: {
        value: 1,
        message: 'Minimun 1 character',
      },
    },
  },
  {
    type: 'text',
    name: 'userSecondName',
    options: {
      pattern: {
        value: /^[a-zA-Z]+[a-zA-Z']?$/,
        message: 'No special characters or numbers',
      },
      required: 'Required field',
      minLength: {
        value: 1,
        message: 'Minimun 1 character',
      },
    },
  },
  {
    type: 'date',
    name: 'birthDate',
    options: {
      validate: {
        invalidDate: (inputValue: string): string | boolean =>
          checkDateValidity(inputValue),
      },
      required: 'Required field',
    },
  },
  {
    type: 'text',
    name: 'street',
    options: {
      required: 'Required field',
      minLength: 1,
    },
  },
  {
    type: 'text',
    name: 'city',
    options: {
      pattern: {
        value: /^[a-zA-Z]+[a-zA-Z']?$/,
        message: 'No special characters or numbers',
      },
      required: 'Required field',
      minLength: 1,
    },
  },
  {
    type: 'text',
    name: 'postalCode',
    options: {
      required: 'Required field',
      minLength: 1,
    },
  },
];
