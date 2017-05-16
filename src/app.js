import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCIRv_5E2gqOu9tz0gs_5RGdTWHoFhcHsk',
    authDomain: 'authf-33dc0.firebaseapp.com',
    databaseURL: 'https://authf-33dc0.firebaseio.com',
    projectId: 'authf-33dc0',
    storageBucket: 'authf-33dc0.appspot.com',
    messagingSenderId: '917627718569'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
      this.setState({ loggedIn: true });
        } else {
      this.setState({ loggedIn: false });
        }
      });
    }

renderContent() {
  switch (this.state.loggedIn) {
    case true:
      return (
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out</Button>
        </CardSection>);
    case false:
      return <LoginForm />;
    default:
      return <View style={{ width: 50, height: 50 }}><Spinner size="large" /></View>;
    }
}

  render() {
    return (
      <View>
      <View><Header headerText="Authentication" /></View>
      {this.renderContent()}
      </View>
    );
  }
}

export default App;
