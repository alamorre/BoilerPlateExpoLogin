import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import TextField from '../../Components/Input/TextInput';

const formName = 'loginForm';

class LogInPage extends Component {
  state = {
    loading: false
  };

  onSubmit(values) {
    console.log(values);
    Actions.mapsPage();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.Container}>
        <Text style={ styles.LoginTitle }>
          Magic Windows
        </Text>

        <Field
          autoFocus
          type='email'
          name={'username'}
          component={TextField}
          placeholder='Email Address'
        />

        {/* Gap for Inputs */}
        <View style={{ height: 12 }} />

        <Field
          type='password'
          name={'password'}
          component={TextField}
          placeholder='Password'
        />

        {/* Gap for Button */}
        <View style={{ height: 12 }} />

        <TouchableOpacity 
          style={ styles.LoginButton}
          onPress={ handleSubmit(this.onSubmit.bind(this)) }>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Login
          </Text>
        </TouchableOpacity>

        {/*  Offset for Keyboard */}
        <View style={{ height: 220 }} />
      </View>
    );
  }
};

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
  LoginTitle: {
    fontWeight: '700',
    paddingBottom: 12,
    fontSize: 30,
  },
  LoginButton: {
    backgroundColor: '#1890ff',
    width: screenWidth - 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 55,
  }
});

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'You need an email address';
  } else{
    values.username = values.username.trim() // Trim the email for android autopopulate
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
      errors.username = 'This is email address is not valid';
    }
  }
  if (!values.password) {
    errors.password = 'You need a password';
  }
  return errors;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    validate,
    form: formName
  })(LogInPage)
);