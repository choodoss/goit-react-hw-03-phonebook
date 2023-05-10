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
    // name: '',
    // number: '',
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

  hendleSubmitForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const findeErr = this.state.contacts.find(contact => contact.name === formData.get('name'))
    if (findeErr) {
      alert('вийди звідси розбійник')
      return
    }
    this.setState({ contacts: [...this.state.contacts, { id: generateId(), name: formData.get('name'), phone: formData.get('number') }], name: '', number: '' })
  };

  render() {
    const hendleSubmitForm = this.hendleSubmitForm;
    const getFilterContacts = this.getFilterContacts();
    const filter = this.state.filter;
    const hendleFilterProp = this.hendleFilter;
    const hendleContactRemoveProp = this.hendleContactRemove;

    const app =
      <AppCont>
        <h1>Phonebook</h1>
        <Form hendleSubmitForm={hendleSubmitForm} />
        <h2>Contact</h2>
        <Search hendleFilterProp={hendleFilterProp} inputIdFilter={inputIdFilter} filter={filter} />
        <List getFilterContacts={getFilterContacts} hendleContactRemoveProp={hendleContactRemoveProp} />
      </AppCont>
    return app;
  };
}

export default App;


