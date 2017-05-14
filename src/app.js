import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCIRv_5E2gqOu9tz0gs_5RGdTWHoFhcHsk',
    authDomain: 'authf-33dc0.firebaseapp.com',
    databaseURL: 'https://authf-33dc0.firebaseio.com',
    projectId: 'authf-33dc0',
    storageBucket: 'authf-33dc0.appspot.com',
    messagingSenderId: '917627718569'
    });
  }


  render() {
    return (
      <View>
      <Header headerText="Authentication" />
      <LoginForm />
      </View>
    );
  }
}

export default App;
