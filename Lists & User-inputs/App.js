import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './Contacts';
import Row from './Row';
import ContactsList from './ContactsList';
import AddContactFrom from './AddContactFrom';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  state = {
    showForm: false,
    showContacts: false,
    contacts: contacts,
  };

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts,
    }));
  };
  toggleForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm,
    }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }));
  };

  addContact = newContact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
      showForm: false,
    }));
  };

  //renderItem = obj => <Row {...(obj.item)}/>

  render() {
    if (this.state.showForm)
      return <AddContactFrom onSubmit={this.addContact} />;
    return (
      <View style={styles.container}>
        <Button onPress={this.toggleContacts} title="toggle contacts" />
        <Button onPress={this.sort} title="sort" />
        <Button onPress={this.toggleForm} title="AddContact" />
        {this.state.showContacts && (
          <ContactsList contacts={this.state.contacts} />
        )}
        {/*this.state.showContacts && (<FlatList 
          renderItem = {this.renderItem}
          data = {this.state.contacts}
        />)*/}
        {/*<ScrollView>
          {this.state.showContacts &&
            contacts.map(contact => <Row {...contact} />)}
        </ScrollView>*/}
      </View>
    );
  }
}

