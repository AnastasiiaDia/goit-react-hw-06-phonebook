import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './components/Form/Form';
import { ContactList } from './components/ContactList/ContactList';
import { Container } from './components/Container.styled';
import { Input, Section } from './components/Form/FormElements.styled';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const onAddContact = data => {
    if (contacts.some(({ name }) => data.name === name))
      return alert(`${data.name} is already in contacts`);
    const newContact = { ...data, id: nanoid() };

    setContacts([...contacts, newContact]);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeImput = event => {
    setFilter(event.target.value.trim());
  };

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    return () => {
      localStorage.removeItem('contacts');
    };
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <Form onAddContact={onAddContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts</p>
      ) : (
        <Section>
          <p>Find conacts by name</p>
          <Input
            type="text"
            placeholder="Search contact"
            value={filter}
            onChange={onChangeImput}
          ></Input>
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        </Section>
      )}
    </Container>
  );
}
