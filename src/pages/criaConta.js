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
        <Text style={styles.textButoon}>Cadastrar</Text>
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
    marginTop: 150,
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
    paddingLeft: 20,
    fontWeight: '500',
  },
  inputEmail: {
    fontSize: 16,
    width: '80%',
    color: '#000000',
    backgroundColor: '#808080',
    borderRadius: 20,
    paddingLeft: 20,
    marginBottom: 8,
    fontWeight: '500',
  },
  inputSenha: {
    fontSize: 16,
    width: '80%',
    color: '#000000',
    paddingLeft: 20,
    backgroundColor: '#808080',
    borderRadius: 20,
    marginBottom: 8,
    fontWeight: '500',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#008000',
    fontWeight: 'bold',
    width: '80%',
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    padding: 8,
  },
  textButoon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    alignItems: 'center',
  },
});
