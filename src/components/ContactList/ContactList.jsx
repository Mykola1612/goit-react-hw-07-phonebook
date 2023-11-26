import React, { useEffect } from 'react';
import styles from './ContactList.module.css';
import { deleteContact, fetchContact } from 'redux/contacts/contacts.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const handleFilterContacts = () => {
    if (!contacts) {
      return [];
    }
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <ul className={styles.list_contacts}>
      {handleFilterContacts().map(contact => {
        return (
          <li key={contact.id} className={styles.list_element}>
            {contact.name}: {contact.phone}{' '}
            <button
              type="button"
              className={styles.button_contacts__list}
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
