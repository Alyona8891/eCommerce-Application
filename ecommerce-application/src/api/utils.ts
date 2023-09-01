import { BaseAddress, CustomerDraft } from '@commercetools/platform-sdk';
import { IRegistrationData } from '../types/types';

// eslint-disable-next-line max-lines-per-function
export const getClientData = (
  registrationData: IRegistrationData,
): CustomerDraft => {
  const clientShippingAdress: BaseAddress = {
    country: registrationData.shippingCountry,
    city: registrationData.shippingCity,
    streetName: registrationData.shippingStreet,
    postalCode: registrationData.shippingPostalCode,
  };
  const clientBillingAdress: BaseAddress = {
    country: registrationData.billingCountry,
    city: registrationData.billingCity,
    streetName: registrationData.billingStreet,
    postalCode: registrationData.billingPostalCode,
  };
  const clientAddresses = registrationData.isSameAddress
    ? [clientShippingAdress]
    : [clientShippingAdress, clientBillingAdress];
  const clientShippingAdressID = clientAddresses.indexOf(clientShippingAdress);
  const clientBillingAdressID = registrationData.isSameAddress
    ? clientShippingAdressID
    : clientAddresses.indexOf(clientBillingAdress);
  const clientDefaultShippingAddress = registrationData.isShippingAddressDefault
    ? clientShippingAdressID
    : undefined;
  const clientDefaultBillingAddress = registrationData.isBillingAddressDefault
    ? clientBillingAdressID
    : undefined;
  return {
    email: registrationData.email,
    password: registrationData.password,
    firstName: registrationData.userFirstName,
    lastName: registrationData.userLastName,
    dateOfBirth: registrationData.birthDate,
    addresses: clientAddresses,
    shippingAddresses: [clientShippingAdressID],
    billingAddresses: [clientBillingAdressID],
    defaultShippingAddress: clientDefaultShippingAddress,
    defaultBillingAddress: clientDefaultBillingAddress,
  };
};
