import { StyleSheet } from "react-native";
import { CustomTextInput } from '../../../components/CustomTextInput';

const HomeStyles = StyleSheet.create({
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
      height: '62%',
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
    formText2: {
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'baseline',
        color: '#bdbdbd',
        marginBottom: 5,
        marginLeft: 35
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
    logoBackground: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10, // Ajusta el radio de borde según sea necesario
        elevation: 5, // Esto agrega sombra al recuadro blanco (Android)
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    
  
  });

  export default HomeStyles;