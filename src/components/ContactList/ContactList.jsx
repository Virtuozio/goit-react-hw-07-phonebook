import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const deleteBtn = e => dispatch(deleteContact(e.target.id));

  return (
    <>
      <ul className="contacts">
        {contacts.map(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ? (
            <li key={contact.id}>
              <span className="contacts-name">{contact.name}:</span>
              <span className="contacts-number">{contact.phone}</span>
              <button
                id={contact.id}
                className="contacts-del-btn"
                onClick={deleteBtn}
              >
                Delete
              </button>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   filter: PropTypes.string.isRequired,
// };
