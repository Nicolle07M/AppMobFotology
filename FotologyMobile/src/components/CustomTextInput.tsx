import React from 'react';
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native';

interface Props {
  //placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: any) => void;
}

export const CustomTextInput = ({
  //placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText
}: Props) => {
  return (
      <TextInput
        style={styles.formTextInput}
        //placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={text => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
  );
};

const styles = StyleSheet.create({
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    backgroundColor: '#FFA50080', // Color de fondo naranja claro
    borderRadius: 15, // Borde redondeado
    width: '80%',
    height: 50,
    marginBottom: 20,
    alignSelf: 'center'
  }
});
