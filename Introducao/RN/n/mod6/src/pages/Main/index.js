import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default function Main(props) {
  const [newUser, setNewuser] = useState('diego3g');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const usersLocal = await AsyncStorage.getItem('users');
    if (usersLocal) {
      setUsers(JSON.parse(usersLocal));
    }
  }, []);

  function handleNavigate(user) {
    const { navigation } = props;
    navigation.navigate('User', { user });
  }

  async function handlerAddUser() {
    setLoading(true);
    // console.tron.log(newUser);
    const response = await api.get(`/users/${newUser}`);
    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };
    setUsers([...users, data]);
    console.tron.log(users);
    Keyboard.dismiss();
    setLoading(false);
    AsyncStorage.setItem('users', JSON.stringify(users));
  }
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={text => setNewuser(text)}
          returnKeyType="send"
          onSubmitEditing={() => {
            handlerAddUser();
          }}
        />
        <SubmitButton
          loading={loading}
          onPress={() => {
            handlerAddUser();
          }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
              <Icon name="add" size={20} color="#fff" />
            )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={user => user.loing}
        renderItem={({ item }) => (
          <User>
            <Avatar source={{ uri: item.avatar }} />
            <Name>{item.name}</Name>
            <Bio>{item.bio}</Bio>

            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileButtonText>Ver perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};

Main.prototype = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
