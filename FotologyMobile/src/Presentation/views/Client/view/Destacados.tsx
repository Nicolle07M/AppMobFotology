import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import useViewModel from '../../Client/view/viewModel';
import { RootStackParamList } from '../../../../../App';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList,'WelcomeScreen'> { };

const photographers = [
  {
    id: 1,
    name: 'Camilo Rodriguez',
    Categoria: 'Categoria: Urbano',
    Correo: 'Correo: cam@gmail.com',
    Puntuacion: 'Puntuacion: 4.5/5.0',
    photo: require('../../../../../assets/camilo.jpg'), // Importa la imagen de la carpeta assets
  },
  {
    id: 2,
    name: 'Nicolle Marquez',
    Categoria: 'Categoria: Paisajes',
    Correo: 'Correo: nic@gmail.com',
    Puntuacion: 'Puntuacion: 4.7/5.0',
    photo: require('../../../../../assets/yo.jpg'), // Importa la imagen de la carpeta assets
  },
  {
    id: 3,
    name: 'Karen Vera',
    Categoria: 'Categoria: Animales',
    Correo: 'Correo: karenv@gmail.com',
    Puntuacion: 'Puntuacion: 4.5/5.0',
    photo: require('../../../../../assets/karen.jpg'), // Importa la imagen de la carpeta assets
  },
  {
    id: 4,
    name: 'Nataly Sanchez',
    Categoria: 'Categoria: Retratos',
    Correo: 'Correo: nat@gmail.com',
    Puntuacion: 'Puntuacion: 4.6/5.0',
    photo: require('../../../../../assets/nataly.png'), // Importa la imagen de la carpeta assets
  },

  // Agrega más fotógrafos si es necesario
];

const WelcomeViewModel = (props: DrawerContentComponentProps) => {
  const { navigation } = props;

  const { removeSession } = useViewModel();
  
  const handleLogout = () => {
    removeSession();
    navigation.navigate('HomeScreen');
  };

  const handleNavigateToCategorie = () => {
    navigation.navigate('CategoriesScreen');
  };

  const handleNavigateToWelcome = () => {
    navigation.navigate('WelcomeScreen');
  };
  const handleNavigateToDestacados = () => {
    navigation.navigate('PhotographersScreen');
  };
  
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'black' }}>
         
         <DrawerItem
        label="Destacados"
        onPress={handleNavigateToDestacados}
        labelStyle={{ color: 'white' }}
      />
         <DrawerItem
        label="Welcome"
        onPress={handleNavigateToWelcome}
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

const PhotographersScreen = () => {
  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />} initialRouteName="Destacados">
      <Drawer.Screen name="Destacados" component={WelcomeContent} />
    </Drawer.Navigator>
  );
};

const WelcomeContent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.orangeBackground}>
        <Text style={styles.welcomeText}>Fotógrafos Destacados</Text>
      </View>
      <Text style={styles.description}>
        Aquí encontrarás los fotógrafos destacados por su trabajo y compromiso dentro del aplicativo mediante la calificación que dan los usuarios. 
      </Text><Text style={styles.description2}>
        ¡Explora! 
      </Text>
      <View style={styles.orangeLine} />
      {photographers.map((photographer) => (
        <View key={photographer.id} style={styles.card}>
          <View style={styles.photoContainer}>
            <Image source={photographer.photo} style={styles.photo} />
          </View>
          <View style={styles.content}>
            <Text style={styles.name}>{photographer.name}</Text>
            <Text style={styles.description}>{photographer.Categoria}</Text>
            <Text style={styles.description}>{photographer.Correo}</Text>
            <Text style={styles.description}>{photographer.Puntuacion}</Text>
          </View>

        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  orangeBackground: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  description2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
  orangeLine: {
    backgroundColor: 'orange',
    height: 2,
    width: '100%',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  photoContainer: {
    marginRight: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PhotographersScreen;
