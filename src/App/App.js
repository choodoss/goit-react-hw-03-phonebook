import { Component } from 'react';
import { AppCont } from './App.styled'
import generateId from '../tools/idRandomize'
import defaultData from '../tools/defaultData'
import Form from '../Form/Form'
import Search from '../Search/Search'
import List from '../List/LIst'

const inputIdFilter = generateId()

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.runDefaultData();
  };

  hendleFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });

  };

  getFilterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  runDefaultData = () => {
    this.setState({ contacts: [...this.state.contacts, ...defaultData] })
  };

  hendleContactRemove = ({ currentTarget: { id } }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  SubmitFormhendler = (formData) => {
    const findeErr = this.state.contacts.find(contact => contact.name === formData.get('name'))
    if (findeErr) {
      alert('вийди звідси розбійник')
      return
    }
    this.setState({ contacts: [...this.state.contacts, { id: generateId(), name: formData.get('name'), phone: formData.get('number') }] })
  };


  render() {
    const SubmitFormhendler = this.SubmitFormhendler;
    const getFilterContacts = this.getFilterContacts();
    const filter = this.state.filter;
    const hendleFilterProp = this.hendleFilter;
    const hendleContactRemoveProp = this.hendleContactRemove;

    const app =
      <AppCont>
        <h1>Phonebook</h1>
        <Form onSubmit={SubmitFormhendler} />
        <h2>Contact</h2>
        <Search hendleFilterProp={hendleFilterProp} inputIdFilter={inputIdFilter} filter={filter} />
        <List getFilterContacts={getFilterContacts} hendleContactRemoveProp={hendleContactRemoveProp} />
      </AppCont>
    return app;
  };
}

export default App;


