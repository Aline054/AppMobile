import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function CriarConta({navigation}) {
  const cadastrando = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie sua Conta</Text>
      <TextInput style={styles.input} placeholder="Seu nome completo" />
      <TextInput style={styles.inputEmail} placeholder="Seu email" />
      <TextInput style={styles.inputSenha} placeholder="Crie uma senha" />
      <TouchableOpacity onPress={cadastrando} style={styles.button}>
        <Text>Cadastrar</Text>
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
    marginTop: 90,
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    marginTop: 40,
    fontSize: 16,
    width: '80%',
    color: '#000000',
    backgroundColor: '#808080',
    borderRadius: 20,
    padding: 13,
    marginBottom: 8,
  },
  inputEmail: {
    fontSize: 16,
    width: '80%',
    color: '#000000',
    backgroundColor: '#808080',
    borderRadius: 20,
    marginBottom: 8,
  },
  inputSenha: {
    fontSize: 16,
    width: '80%',
    color: '#000000',
    backgroundColor: '#808080',
    borderRadius: 20,
    marginBottom: 8,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#008000',
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: 250,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },
});
