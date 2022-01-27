import React, { Component } from 'react';
// import './App.css';
import { ContactList } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { ContactForm } from './components/ContactForm/ContactForm';
import { GlobalStyle } from './components/GlobalStyles';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  onSubmitContact = (newContact, resetInput) => {
    const isExistContact = this.state.contacts.find(
      contact =>
        contact.name.toLocaleLowerCase() ===
        newContact.name.toLocaleLowerCase(),
    );

    isExistContact
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          resetInput();
          return { contacts: [...prevState.contacts, newContact] };
        });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const findContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <>
        <GlobalStyle />
        <section style={{ padding: '20px' }}>
          <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
          <ContactForm onSubmitContact={this.onSubmitContact} />
          <div>
            <h2>Contacts</h2>
            <Filter
              value={this.state.filter}
              handleChange={this.handleChange}
            />
            <ContactList
              contacts={findContacts}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
