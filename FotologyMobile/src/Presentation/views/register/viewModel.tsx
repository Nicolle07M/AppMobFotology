import React, { useState } from 'react';
import { ApiFotology } from '../../../Data/source/remote/api/ApiFotology';
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth';
import * as ImagePicker from "expo-image-picker";

const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: '',
    lastname: '',
    image: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);
    }
  };
  

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  
  const register = async () => {
    if (!isValidForm()) {
    const response = await RegisterAuthUseCase(values);
    console.log('Result' + JSON.stringify(response));
    }
    }
    const isValidForm = (): boolean => {
    if (values.name === '') {
    setErrorMessage('El nombre es requerido');
    return false;
    }
    if (values.lastname === '') {
    setErrorMessage('El apellido es requerido');
    return false;
    }
    if (values.email === '') {
    setErrorMessage('El correo es requerido');
    return false;
    }
    if (values.phone === '') {
    setErrorMessage('El teléfono es requerido');
    return false;
    }
    if (values.password === '') {
    setErrorMessage('La contraseña es requerida');
    return false;
    }
    if (values.confirmPassword === '') {
    setErrorMessage('La confirmación de contraseña es requerida');
    return false;
    }
    if (values.password !== values.confirmPassword) {
    setErrorMessage('Las contraseñas no coinciden');
    return false;
    }
    return true;
    } 
   

  return {
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    errorMessage
  };
};

export default RegisterViewModel;