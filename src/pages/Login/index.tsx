import * as React from 'react';
import { Text, View } from 'react-native'

const LoginScreen = ({ navigation, route }) => {
  return (
  <View>
    <Text>Titulo</Text>
    <Text>This is {route.params.name}'s profile</Text>
  </View>
  );
};

export default LoginScreen