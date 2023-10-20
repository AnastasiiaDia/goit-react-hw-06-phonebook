import { Button, FormEl, Input } from './FormElements.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getName, getNumber } from 'redux/selector';
import { addContact, addName, addNumber } from 'redux/actions';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const name = useSelector(getName);
  const number = useSelector(getNumber);

  const onChangeInputValue = event => {
    switch (event.target.name) {
      case 'name':
        dispatch(addName(event.target.value));
        break;
      case 'number':
        dispatch(addNumber(event.target.value));
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const addedContact = { name, number };
    form.reset();

    if (contacts.some(({ name }) => addedContact.name === name)) {
      return alert(`${addedContact.name} is alrady in your contacts`);
    }
    dispatch(addContact(addedContact));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <FormEl onSubmit={onFormSubmit}>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          required
          onChange={onChangeInputValue}
          placeholder="Diana Ivanova"
        />
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          required
          onChange={onChangeInputValue}
          placeholder="123-45-67"
        />
        <Button type="submit">Add contact</Button>
      </FormEl>
    </>
  );
}
