import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
export default function Login({navigation}) {
  async function handleLogin() {
    navigation.navigate('Home');
  }
  const CriarConta = () => {
    navigation.navigate('CriarConta');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça seu login</Text>
      <TextInput style={styles.TextSenha} placeholder="Digite seu email" />
      <TextInput style={styles.TextSenha} placeholder="Digite sua senha" />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={CriarConta}>
        <Text style={styles.buttoncontas}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D3D3',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    marginTop: 190,
    fontWeight: 'bold',
    fontSize: 30,
  },
  TextInput: {
    marginTop: 50,
    width: '80%',
    fontSize: 18,
    color: '#000000',
  },
  TextSenha: {
    width: '80%',
    fontSize: 18,
    marginTop: 15,
    color: '#000000',
  },
  buttonText: {
    marginTop: 60,
    backgroundColor: '#008000',
    fontSize: 16,
    color: '#FFFFFF',
    width: 200,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    padding: 8,
    paddingLeft: 60,
  },
  buttoncontas: {
    color: '#0000FF',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 16,
  },
});
