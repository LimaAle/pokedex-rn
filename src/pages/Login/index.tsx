import * as React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
const LoginScreen = ({ navigation, route }) => {
  return (
    <View >
      <ImageBackground
        source={require('../../../assets/images/background-login.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bem-vindo à 7GAS</Text>
        </View>


        <View style={styles.container}>
          <View style={styles.loginCorp}>
            <Text style={styles.text}>Corporativo</Text>
          </View>
          <View style={styles.loginNormalBox}>
            <View style={styles.loginNormal}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text style={styles.text}>Pessoa física</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen