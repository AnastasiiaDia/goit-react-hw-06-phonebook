import { useState } from 'react';
import { Button, FormEl, Input } from './FormElements.styled';

export function Form({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInputValue = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const addedContact = { name, number };
    onAddContact(addedContact);

    setName('');
    setNumber('');
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
          value={name}
          onChange={onChangeInputValue}
          placeholder="Diana Ivanova"
        />
        <span>Number</span>
        <Input
          type="tel"
          name="number"
          required
          value={number}
          onChange={onChangeInputValue}
          placeholder="123-45-67"
        />
        <Button type="submit">Add contact</Button>
      </FormEl>
    </>
  );
}
