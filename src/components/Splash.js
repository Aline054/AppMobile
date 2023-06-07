import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Splash({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.conatiner}>
      <Text style={styles.title}>Tela Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#363636',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#D2691E',
    marginTop: 250,
    fontWeight: 'bold',
    fontSize: 40,
  },
});
