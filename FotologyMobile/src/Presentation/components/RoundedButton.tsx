import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MyColors } from '../theme/AppTheme'; 

interface Props {
    text: string;
    onPress: () => void,
   }

export const RoundedButton = ({ text, onPress}: Props) => {
    return (
        <TouchableOpacity
            style={styles.RoundedButton}
            onPress={() => onPress()}
        >
    <Text style={styles.textButton} >{ text}</Text>
        </TouchableOpacity>
    )
   } 

const styles = StyleSheet.create({
  RoundedButton: {
    width: '70%',
    height: 50,
    backgroundColor: MyColors.colorButton, 
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold'
  },
});
