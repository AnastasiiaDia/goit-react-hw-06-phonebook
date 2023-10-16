import { Button } from 'components/Form/FormElements.styled';
import { Li } from './Contact.styled';

const Contact = ({ name, id, number, onDeleteContact }) => {
  return (
    <Li>
      <span>{name}</span>
      <span>{number}</span>
      <Button onClick={() => onDeleteContact(id)}>Delete</Button>
    </Li>
  );
};
export default Contact;
