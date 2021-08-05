import * as React from 'react';
import { Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to "
      onPress={() =>
        navigation.navigate('Login')
      }
    />
  );
};
export default HomeScreen