import React,{Component} from "react";
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {


  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
       
    filter: '',
  
  }
  


  inputChangeValue = evt => {
    const newName = evt.target.value;
    const key = evt.target.name;
    return this.setState(prevState => {
    
      return { [key]: newName }
    })
  }
  

  formSubmitHandler = data => {
    const newId = nanoid();
    return this.setState(prevValue => ({
      
      contacts: [{ id: newId, name: data.name, number: data.number }, ...prevValue.contacts]
    }))
  }


  calculateFilteredContacts = () => {
    const { contacts } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter, 0);
    });
    return filteredContacts.length === 0 ? contacts : filteredContacts;
  }
  
  alertSearchHandler = (data) => {
    const searchResult = this.state.contacts.find(contact => contact.name === data.name);
    if (!searchResult) { this.formSubmitHandler(data); } else { alert(`${data.name} is already in contacts`); }
    
  }

  deleteItem = (contactId) => {
    this.setState(prevValue => ({
      contacts: prevValue.contacts.filter(item =>
        item.id !== contactId
      )
    }))
  }
  
  render() {
    
    
    const visibleContacts = this.calculateFilteredContacts();
  return(
    <div>
      <h1>Phonebook</h1>
      <ContactForm    onAlert={this.alertSearchHandler} />
      <h2>Contacts</h2>
      <Filter filter={this.state.filter } onChange={this.inputChangeValue} />
      <ContactList list={visibleContacts} onDeleteItem={this.deleteItem} />
         
      
    </div>
  );
  }
  
};
