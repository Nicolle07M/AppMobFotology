import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid, TouchableOpacity  } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from '../Home/viewModel';
import { CustomTextInput } from '../../../components/CustomTextInput';
import styles from './Styles';

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

        <CustomTextInput
          placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text='Ingresar' onPress={() =>{
            console.log('Email: ' + email);
            console.log('Password: ' + password);
            }} />
        </View>

        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}



export default HomeScreen;
