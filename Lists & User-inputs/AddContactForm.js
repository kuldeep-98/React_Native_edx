import React from 'react';
import { View, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  pad: {
    flex:1,
    padding: 20,
    justifyContent: 'center'
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
    isFormValid: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.phone !== prevState.phone) {
      this.validateForm()
    }
  }

  validateForm = () => {
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
      this.setState({ isFormValid: true })
    } else {
      this.setState({ isFormValid: false })
    }
  }

  handleName = name => {
    this.setState(prev => ({
      name: name,
    }));
  };
  handlePhone = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState(prev => ({
        phone: phone,
      }));
    }
  };
  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.pad}>
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
        <Button title="Submit" onPress={this.handleSubmit} disabled={!this.state.isFormValid} />
      </KeyboardAvoidingView>
    );
  }
}

AddContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

