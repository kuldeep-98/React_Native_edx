import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  pad: {
    padding: 20,
  },
  input: {
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    phone: '',
  };
  handleName = name => {
    this.setState(prev => ({
      name: name,
    }));
  };
  handlePhone = phone => {
    this.setState(prev => ({
      phone: phone,
    }));
  };
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <View style={styles.pad}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleName}
        />
        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handlePhone}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

AddContactForm.propTypes = {
  addContact: PropTypes.func,
};

