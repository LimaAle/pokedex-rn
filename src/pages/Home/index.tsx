import React from 'react';
import { View,  Image, SafeAreaView, StatusBar, Text } from 'react-native'
import TitleCard from '../../components/atoms/TitleCard';
import HomeTabs from '../../components/molecules/HomeTabs';

const icon = require('../../../assets/images/drawer-icon.png');
const logo = require('../../../assets/images/7GAS_logo.png');

import styles from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#00f" />
      <View style={styles.header}>
        <Image source={icon} width={70} height={70} />
        <Image source={logo} width={70} height={70} />
      </View>
      <HomeTabs color="#4EBDEF" background="#00f" text="Options"/>
      <TitleCard text="alo"/>
    </SafeAreaView>
  );
};
export default HomeScreen