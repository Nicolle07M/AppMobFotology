import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import useViewModel from '../../Client/view/viewModel';
import { RootStackParamList } from '../../../../../App';
import { StackScreenProps } from '@react-navigation/stack';
import * as Font from 'expo-font'

interface Props extends StackScreenProps<RootStackParamList,'WelcomeScreen'> { };

const WelcomeViewModel = (props: DrawerContentComponentProps) => {
  const { navigation } = props; // Desestructura navigation de las props
  const { removeSession } = useViewModel();
  
  const handleLogout = () => {
    removeSession();
    navigation.navigate('HomeScreen');
  };

  const handleNavigateToDestacados = () => {
    navigation.navigate('PhotographersScreen');
  };
  const handleNavigateToCategorie = () => {
    navigation.navigate('CategoriesScreen');
  };
  

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'black' }}>
      <DrawerItemList {...props}  /> 
      <DrawerItem
        label="Destacados"
        onPress={handleNavigateToDestacados}
        labelStyle={{ color: 'white' }}
      />
      <DrawerItem
        label="Categorias"
        onPress={handleNavigateToCategorie}
        labelStyle={{ color: 'white' }}
      />
      <DrawerItem
        label="Cerrar Sesión"
        onPress={handleLogout}
        labelStyle={{ color: 'white' }}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />} initialRouteName="Welcome">
      <Drawer.Screen name="Welcome" component={WelcomeContent} />
    </Drawer.Navigator>
  );
};

const WelcomeContent = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
      <View style={[styles.orangeBackground, styles.imageAndWelcome]}>
  <Text style={styles.welcomeText}>BIENVENIDO</Text>
  <Image source={require('../../../../../assets/logo2.png')} style={styles.imageStyle} />
</View>
  
        <Text style={styles.description}>
          Con nuestro aplicativo esperamos ayudar a fotógrafos emergentes, dándoles una opción de publicidad, haciendo conocer su perfil y sus proyectos, puesto que sabemos que la tarea del inicio en cualquier ámbito no es fácil y de igual manera el arte de la fotografía no es muy apoyado.
        </Text>
        <View style={styles.orangeLine} />
  
        <Text style={styles.description}>
          Estamos aquí para brindarte la asistencia que necesitas para aprovechar al máximo nuestro sitio web de fotografía. Si tienes alguna pregunta o problema, ¡no dudes en ponerte en contacto con nosotros.
        </Text>
        <View style={styles.orangeLine} />
  
        <Text style={styles.title2}>Categorías de Fotografía</Text>
        <Text style={styles.description}>
          En nuestro sitio web, ofrecemos una amplia variedad de categorías de fotografía para que puedas explorar y disfrutar. Desde paisajes hasta retratos, tenemos algo para todos los amantes de la fotografía.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CategoriesScreen')}>
          <Text style={styles.buttonText}>Categorías</Text>
        </TouchableOpacity>
        <View style={styles.orangeLine} />
  
        <Text style={styles.title2}>Fotógrafos Destacados</Text>
        <Text style={styles.description}>
          De igual manera también tenemos una sección en la cual se dan a conocer los fotógrafos que han sido destacados durante el mes.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PhotographersScreen')}>
          <Text style={styles.buttonText}>Destacados</Text>
        </TouchableOpacity>
        <View style={styles.orangeLine} />
  
        <Text style={styles.title2}>Contacto</Text>
        <Text style={styles.description}>
          ¿Necesitas contactarnos? Estamos aquí para ayudarte. Puedes comunicarte con nosotros de las siguientes maneras:
        </Text>
        <Text style={styles.description}>
          Correo electrónico: correo@tusitio.com
        </Text>
        <Text style={styles.description}>
          Teléfono: +1234567890
        </Text>
        <View style={styles.orangeLine} />
  
        <Text style={styles.title2}>Preguntas Frecuentes</Text>
        <Text style={styles.description}>
          ¿Cómo subir mis propias fotos?
          Inicia sesión en tu cuenta.
          Ve a tu perfil.
          Haz clic en "Subir Foto".
          Selecciona la imagen que deseas cargar desde tu dispositivo.
          Agrega metadatos y categorías.
        </Text>
  
        <Text style={styles.description}>
          ¡Listo! Tu foto estará disponible para que otros la vean.
        </Text>
  
        <Text style={styles.description}>
          ¿Cómo eliminar mi cuenta?
          Inicia sesión en tu cuenta
          Ve a tu configuración de cuenta.
          Busca la opción "Eliminar cuenta".
          Confirma tu decisión.
        </Text>
        <Text style={styles.description}>
          Tu cuenta se eliminará permanentemente.
        </Text>
  
        <View style={styles.orangeLine} />
        <Text style={styles.description}>
          Si experimentas problemas técnicos mientras usas nuestro sitio web, asegúrate de que tu navegador esté actualizado y que estés utilizando una conexión a Internet estable. Si el problema persiste, no dudes en contactarnos para obtener ayuda adicional.
        </Text>
        <Text style={styles.description}>
          ¡Gracias por ser parte de nuestra comunidad de fotógrafos! Estamos aquí para apoyarte en tu viaje fotográfico.
        </Text>
      </View>
    </ScrollView>
  );
  
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  orangeBackground: {
    marginTop: 24,
    backgroundColor: 'orange',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '100%',
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  imageInsideOrange: {
    alignSelf: 'center',
  },
  titleInsideOrange: {
    marginTop: 10,
  },
  orangeLine: {
    backgroundColor: 'orange',
    height: 2,
    width: '100%', // Ajusta la anchura según sea necesario
    marginBottom: 20,
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'orange',
  },
  imageAndWelcome: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imageStyle: {
    width: 100, // Ajusta el ancho de la imagen según sea necesario
    height: 100, // Ajusta la altura de la imagen según sea necesario
    marginTop: 10, 
  },
});


export default WelcomeScreen;

