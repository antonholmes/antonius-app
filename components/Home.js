import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
// import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Check out my Home Screen!</Text>
    <Button onPress={() => navigation.navigate('Game')} title="Start Game" />
  </View>
);

export default Home;
