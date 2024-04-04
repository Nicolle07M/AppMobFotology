import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import useViewModel from '../../Client/view/viewModel';
import { RootStackParamList } from '../../../../../App';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<RootStackParamList,'WelcomeScreen'> { };

const categories = [
    {
      id: 1,
      name: 'Urbano',
      description: 'Fotografía urbana',
      photo: require('../../../../../assets/urbano.jpg'), // Agrega la ruta de la imagen
    },
    {
      id: 2,
      name: 'Paisajes',
      description: 'Fotografía de paisajes naturales',
      photo: require('../../../../../assets/paisaje.jpg'), // Agrega la ruta de la imagen
    },
    {
      id: 3,
      name: 'Retratos',
      description: 'Fotografía de retratos de personas',
      photo: require('../../../../../assets/retrato.jpg'), // Agrega la ruta de la imagen
    },
    {
      id: 4,
      name: 'Animales',
      description: 'Fotografía de animales',
      photo: require('../../../../../assets/animales.jpeg'), // Agrega la ruta de la imagen
    },
    // Agrega más categorías si es necesario
  ];

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

  const handleNavigateToWelcome = () => {
    navigation.navigate('WelcomeScreen');
  };
  const handleNavigateToCategorie = () => {
    navigation.navigate('CategoriesScreen');
  };
  
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: 'black' }}>
        <DrawerItem
        label="Categorias"
        onPress={handleNavigateToCategorie}
        labelStyle={{ color: 'white' }}
      />
      <DrawerItem
        label="Welcome"
        onPress={handleNavigateToWelcome}
        labelStyle={{ color: 'white' }}
      />
      <DrawerItem
        label="Destacados"
        onPress={handleNavigateToDestacados}
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

const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implementa aquí la lógica de búsqueda
    console.log('Buscando:', searchText);
  };

  return (
    <Drawer.Navigator drawerContent={props => <WelcomeViewModel {...props} />} initialRouteName="Categorias">
      <Drawer.Screen name="Categorias" component={CategoriaContent} />
    </Drawer.Navigator>
  );
};

const CategoriaContent = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Implementa aquí la lógica de búsqueda
    console.log('Buscando:', searchText);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.orangeBackground}>
          <Text style={styles.welcomeText}>Categorias</Text>
        </View>

        <Text style={styles.description}>
          ¿Estás buscando alguna categoría en específico? Este espacio es para ti. 
        </Text>
        <Text style={styles.description2}>
         ¡Encuentra tu estilo fotográfico!
        </Text>
        <View style={styles.orangeLine} />
        
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Buscar..."
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleSearch}
          />
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              // Acción cuando se presiona el botón "Urbano"
              console.log('Botón Urbano presionado');
            }}
            style={[styles.button, styles.customButton]} // Aplicamos el estilo button y customButton
          >
            <Text style={styles.buttonText}>Urbano</Text> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Acción cuando se presiona el botón "Paisajes"
              console.log('Botón Paisajes presionado');
            }}
            style={[styles.button, styles.customButton]} // Aplicamos el estilo button y customButton
          >
            <Text style={styles.buttonText}>Paisajes</Text> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Acción cuando se presiona el botón "Retratos"
              console.log('Botón Retratos presionado');
            }}
            style={[styles.button, styles.customButton]} // Aplicamos el estilo button y customButton
          >
            <Text style={styles.buttonText}>Retratos</Text> 
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // Acción cuando se presiona el botón "Retratos"
              console.log('Botón Animales presionado');
            }}
            style={[styles.button, styles.customButton]} // Aplicamos el estilo button y customButton
          >
            <Text style={styles.buttonText}>Animales</Text> 
          </TouchableOpacity>
        </View>
        
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <View key={category.id} style={styles.categoryCard}>
              <Image source={category.photo} style={styles.categoryPhoto} />
              <Text style={styles.categoryName}>{category.name + '\n' + category.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 16,
    textAlign: 'right', 
    marginBottom: 10,
    marginTop: 5,
  },
  description2: {
    fontSize: 16,
    textAlign: 'right',
    marginBottom: 12,
    fontWeight: 'bold',
    color: 'orange',
  },
  orangeBackground: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  orangeLine: {
    backgroundColor: 'orange',
    height: 2,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  button: {
    paddingVertical: 8, // Ajusta el padding vertical para hacer el botón más pequeño
  paddingHorizontal: 16, // Ajusta el padding horizontal para hacer el botón más pequeño
  backgroundColor: 'orange',
  borderRadius: 5,
  marginHorizontal: 5,
  },
  customButton: {},
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginTop: 10,
  },
  categoryCard: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: '#000',
    marginTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row', // Alinea los elementos en fila
    alignItems: 'center', // Alinea los elementos verticalmente en el centro
  },
  categoryPhoto: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20, // Espaciado entre la imagen y el texto
  },
  categoryInfo: {
    flex: 1, // El texto tomará todo el espacio restante
  },
  categoryName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryDescription: {
    fontSize: 14,
    textAlign: 'right', // Alinea el texto a la derecha
  },
  
});

export default CategoriesScreen;
