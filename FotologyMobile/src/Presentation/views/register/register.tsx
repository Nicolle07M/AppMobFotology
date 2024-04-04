import React, {useEffect, useState} from 'react';
import { View, Text, Image, ToastAndroid, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { CustomTextInput } from '../../components/CustomTextInput';
import useViewModel from '../register/viewModel';
import styles from '../register/Styles';
import ModalPickImage from '../../components/ModalPickImage';
import { MyColors } from '../../theme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'> { };

export const RegisterScreen = ({navigation, route}: Props) => {
  
  const { name, lastname, email, phone, password, image, confirmPassword, errorMessage, loading, user,
     onChange, register, pickImage, takePhoto } = useViewModel();

const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (errorMessage !== '')
    ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }, [errorMessage]);

    useEffect(() => {
      if (user?.id !== null && user?.id !== undefined) {
        navigation.replace('WelcomeScreen');
      }
      
    }, [user]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/fondo2.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>

{

image == ''

?

<Image

source={require('../../../../assets/usuario.png')}

style={styles.logoImage}

/>

:

<Image

source={{ uri: image }}

style={styles.logoImage}

/>

}

</TouchableOpacity>

        <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
      </View>
      <View style={styles.form}>
      <ScrollView>
        
        <Text style={styles.formText}>Crea una cuenta!</Text>

        <Text style={styles.formText2}>Nombre</Text>
        <CustomTextInput
              
              keyboardType='default'
              property='name'
              onChangeText={onChange}
              value={name}
            />
        <Text style={styles.formText2}>Apellido</Text>
            <CustomTextInput
              
              keyboardType='default'
              property='lastname'
              onChangeText={onChange}
              value={lastname}
            />
        <Text style={styles.formText2}>Correo Electronico</Text>
            <CustomTextInput
              
              keyboardType='email-address'
              property='email'
              onChangeText={onChange}
              value={email}
            />
          <Text style={styles.formText2}>Telefono</Text>
            <CustomTextInput
              
              keyboardType='numeric'
              property='phone'
              onChangeText={onChange}
              value={phone}
            />
          <Text style={styles.formText2}>Contraseña</Text>
            <CustomTextInput
              
              keyboardType='default'
              property='password'
              onChangeText={onChange}
              value={password}
              secureTextEntry={true}
            />
          <Text style={styles.formText2}>Confirmar Contraseña</Text>
            <CustomTextInput
             
              keyboardType='default'
              property='confirmPassword'
              onChangeText={onChange}
              value={confirmPassword}
              secureTextEntry={true}
            />

        <View style={{ marginTop: 10 }}>
        <RoundedButton text='Registrar' onPress={() => register()} />
        </View>
        </ScrollView>
      </View>
      <ModalPickImage
        openGallery={pickImage}
        openCamera={takePhoto}
        setModalUseState={setModalVisible}
        modalUseState={modalVisible}
        />
        {
          loading &&
          <ActivityIndicator
          style={styles.loading}
          size="large"
          color={MyColors.primary}
        />
      }
    </View>
  );
};

