import * as React from 'react';
import { Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to "
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
export default HomeScreen