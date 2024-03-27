import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoundedButton } from '../../../components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { CustomTextInput } from '../../../components/CustomTextInput';
import useViewModel from '../register/viewModel';
import styles from './Styles';

export const RegisterScreen = () => {
  const { name, lastname, phone, email, password, confirmPassword, onChange, register } = useViewModel();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondo2.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../assets/usuario.png')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Registrate con nosotros!</Text>
        <CustomTextInput
              
              keyboardType='default'
              property='name'
              onChangeText={onChange}
              value={name}
            />

            <CustomTextInput
              
              keyboardType='default'
              property='lastname'
              onChangeText={onChange}
              value={lastname}
            />

            <CustomTextInput
              
              keyboardType='email-address'
              property='email'
              onChangeText={onChange}
              value={email}
            />

            <CustomTextInput
              
              keyboardType='numeric'
              property='phone'
              onChangeText={onChange}
              value={phone}
            />

            <CustomTextInput
              
              keyboardType='default'
              property='password'
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />

            <CustomTextInput
             
              keyboardType='default'
              property='confirmPassword'
              onChangeText={onChange}
              value={confirmPassword}
              secureTextEntry={true}
            />

        <View style={{ marginTop: 30 }}>
        <RoundedButton text='CONFIRMAR' onPress={() => register()} />
        </View>
      </View>
    </View>
  );
};

