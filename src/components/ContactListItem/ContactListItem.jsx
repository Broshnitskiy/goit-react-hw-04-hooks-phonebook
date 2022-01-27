import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      &#9742; {name}: {number};
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
