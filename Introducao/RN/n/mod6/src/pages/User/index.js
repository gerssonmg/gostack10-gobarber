import React from 'react';
import { View } from 'react-native';
import api from '../../services/api';
// import { Container } from './styles';

export default function User({ navigation }) {
  console.tron.log(navigation.getParam('user'));

  return <View />;
}

User.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('user').name,
});
