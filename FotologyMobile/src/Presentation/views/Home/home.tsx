import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, TouchableOpacity  } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from '../Home/viewModel';

export const HomeScreen = () => {

  const {email, password, onChange
} = useViewModel();

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegisterPress = () => {
    navigation.navigate('RegisterScreen'); // Reemplaza 'Register' con el nombre de tu pantalla de registro en tus rutas de navegación
    };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondo2.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/logo2.png')}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Iniciar Sesión</Text>
        <Text style={styles.formText1}>Inicia y explora!</Text>
        <View style={styles.formInput}>
        <TextInput
          style={styles.formTextInput}
          placeholder='Correo electrónico'
          keyboardType='email-address'
          value={email}
          onChangeText={ text => onChange('email', text)}
        />
      </View>
        <View style={styles.formInput}>
          <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            value={password}
            onChangeText={ text => onChange('password', text)}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='Ingresar' onPress={() =>{
            console.log('Email: ' + email);
            console.log('Password: ' + password);
            }} />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={handleRegisterPress}>
          <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 75,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 45,
    alignSelf: 'center',
  },
  formText1: {
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    color: '#bdbdbd',
  },
  formInput: {
    backgroundColor: '#FFA50080', // Color de fondo naranja claro
    borderRadius: 10, // Borde redondeado
    width: '80%',
    marginBottom: 20,
    alignSelf: 'center'
  },
  formTextInput: {
    padding: 10,
    fontSize: 16,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'orange',
    borderBottomWidth: 1,
    borderBottomColor: 'orange',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
