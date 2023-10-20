import { Form } from './components/Form/Form';
import { ContactList } from './components/ContactList/ContactList';
import { Container } from './components/Container.styled';
import { Input, Section } from './components/Form/FormElements.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { getRegisteredStyles } from '@emotion/css';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContact, setFilter } from 'redux/actions';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onChangeImputFilter = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Container>
      <Form />
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
            onChange={onChangeImputFilter}
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
