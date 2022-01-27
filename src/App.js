import { useState, useEffect, useRef } from 'react';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsArray = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsArray);
    return parsedContacts
      ? parsedContacts
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current === true) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
    isMounted.current = true;
  }, [contacts]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const onSubmitContact = (newContact, resetInput) => {
    const isExistContact = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() ===
        newContact.name.toLocaleLowerCase(),
    );

    isExistContact
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(prevContacts => {
          resetInput();
          return [...prevContacts, newContact];
        });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId),
    );
  };

  const normalizedFilter = filter.toLowerCase();
  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <GlobalStyle />
      <section style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm onSubmitContact={onSubmitContact} />
        <div>
          <h2>Contacts</h2>
          <Filter value={filter} handleChange={handleChange} />
          <ContactList
            contacts={findContacts}
            onDeleteContact={deleteContact}
          />
        </div>
      </section>
    </>
  );
}

export default App;
