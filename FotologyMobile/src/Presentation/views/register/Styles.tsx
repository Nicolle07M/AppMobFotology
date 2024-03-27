import { StyleSheet } from "react-native";

const RegisterStyle = StyleSheet.create({
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
      height: '70%',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 0,
      borderTopLeftRadius: 75,
      borderTopRightRadius: 0,
      padding: 30,
    },
    formText: {
      fontWeight: 'bold',
      fontSize: 37,
      alignSelf: 'center',
      marginBottom: 30,
    },
    formText2: {
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'baseline',
        color: '#bdbdbd',
        marginBottom: 5,
        marginLeft: 35
      },
    formIcon: {
      width: 25,
      height: 25,
      marginTop: 5,
    },
    formInput: {
      flexDirection: 'row',
      marginTop: 25,
    },
    formTextInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: '#AAAAAA',
      marginLeft: 15,
    },
    logoContainer: {
      position: 'absolute',
      alignSelf: 'center',
      top: '5%',
      alignItems: 'center',
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

  export default RegisterStyle;
  