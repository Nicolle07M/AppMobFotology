import React, { useEffect} from 'react';
import { View, Text,  Image, ToastAndroid, TouchableOpacity  } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from '../Home/viewModel';
import { CustomTextInput } from '../../../Presentation/components/CustomTextInput';
import styles from './Styles';

interface Props extends StackScreenProps<RootStackParamList,
'HomeScreen'>{};

export const HomeScreen = ( {navigation, route}: Props ) => {

  const {email, password, errorMessage, user, onChange, login} = useViewModel();

  //const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (errorMessage !== '') {
    ToastAndroid.show(errorMessage, ToastAndroid.LONG);
    }

    }, [errorMessage]);
    useEffect(() => {
    if (user?.id !== null && user?.id !== undefined) {
    navigation.replace('ProfileInfoScreen');
    }
    }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondo2.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
      <View style={styles.logoBackground}>
        <Image
          source={require('../../../../assets/logo2.png')}
          style={styles.logoImage}
        />
         </View>
      </View>
    
      <View style={styles.form}>
      <Text> {'\n'}</Text>
        <Text style={styles.formText}>Iniciar Sesión</Text>
        <Text style={styles.formText1}>Inicia y explora!</Text>

        <Text></Text>

        <Text style={styles.formText2}>Correo Electronico</Text>

        <CustomTextInput
          //placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />


      <Text style={styles.formText2}>Contraseña</Text>
        <CustomTextInput
          //placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 15 }}>
          <RoundedButton text='Ingresar' onPress={() => login()}/>
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
