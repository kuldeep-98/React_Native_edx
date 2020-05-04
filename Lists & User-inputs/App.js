import React from 'react';
import { Button, View, StyleSheet, ScrollView, Text,FlatList } from 'react-native';
import Constants from 'expo-constants';
import contacts from './Contacts';
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
  };

  toggleContacts = () => {
    this.setState(prevState => ({
      showContacts: !prevState.showContacts,
    }));
  };

  renderItem = obj => <Row {...(obj.item)}/>

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.toggleContacts} title="toggle contacts" />
        {this.state.showContacts && (<FlatList 
          renderItem = {obj =>  <Row {...(obj.item)}/>}
          data = {contacts}
        />)}
        {/*<ScrollView>
          {this.state.showContacts &&
            contacts.map(contact => <Row {...contact} />)}
        </ScrollView>*/}
      </View>
    );
  }
}

