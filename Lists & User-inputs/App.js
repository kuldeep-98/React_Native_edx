import React from 'react';
import { Button, View, StyleSheet, ScrollView, Text,FlatList } from 'react-native';
import Constants from 'expo-constants';
import contacts, { compareNames } from './Contacts';
import Row from './Row'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});

export default class App extends React.Component {
  state = {
    showContacts: false,
    contacts: contacts
  };

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts,
    }));
  };

  sort = () => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts].sort(compareNames),
    }))
  }

  renderItem = obj => <Row {...(obj.item)}/>

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.toggleContacts} title="toggle contacts" />
        <Button onPress={this.sort} title="sort" />
        {this.state.showContacts && (<FlatList 
          renderItem = {this.renderItem}
          data = {this.state.contacts}
        />)}
        {/*<ScrollView>
          {this.state.showContacts &&
            contacts.map(contact => <Row {...contact} />)}
        </ScrollView>*/}
      </View>
    );
  }
}

