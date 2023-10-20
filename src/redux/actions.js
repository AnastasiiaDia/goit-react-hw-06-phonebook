import { nanoid } from 'nanoid';
export const addName = text => {
  return { type: `name/add`, payload: text };
};
export const addNumber = text => {
  return { type: `number/add`, payload: text };
};
export const addContact = ({ name, number }) => {
  return { type: `contact/add`, payload: { name, number, id: nanoid() } };
};
export const deleteContact = contactId => {
  return { type: `contact/delete`, payload: contactId };
};
export const setFilter = text => {
  return { type: `filter/set`, payload: text };
};
