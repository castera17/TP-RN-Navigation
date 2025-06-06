import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

function pantallaA1() {
  const imageSource = require('./assets/FutbolArg.jpg');
  const navigation = useNavigation();
  const [texto, handlechange] = React.useState('');

  return (
    <View style={styles.homeScreen}>
      <Image source={imageSource} style={styles.bannerImage} />
      <View style={styles.centeredContent}>
        <Text style={styles.text}>Equipos Primera Division Argentina</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="#ccc"
          placeholder="Ingrese su equipo favorito del futbol argentino"
          onChangeText={handlechange}
          value={texto}
        />
        <TouchableOpacity
          style={styles.squareButton}
          onPress={() => navigation.navigate('pantallaA2', { variable: texto })}
        >
          <Text style={styles.buttonText}>Mandar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function pantallaA2({ route }) {
  const navigation = useNavigation();
  const { variable } = route.params;

  return (
    <View style={styles.centeredScreen}>
      <Text style={styles.text}>Sos hincha del equipo {variable}</Text>
    </View>
  );
}

function pantallaB1() {
  const imageSource = require('./assets/Ingreso.jpg');
  const navigation = useNavigation();
  const [texto, handlechange] = React.useState('');
  const [telefono, handlechangetelefono] = React.useState('');
  return (
    <View style={styles.homeScreen}>
      <Image source={imageSource} style={styles.bannerImage} />
      <View style={styles.centeredContent}>
        <Text style={styles.text}>Ingreso de datos</Text>
        <TextInput
          style={styles.textinput}
          placeholderTextColor="#ccc"
          placeholder="Ingresa tu nombre"
          onChangeText={handlechange}
          value={texto}
        />
        <TextInput
          style={styles.textinput}
          placeholderTextColor="#ccc"
          placeholder="Ingresa tu numero de telefono"
          onChangeText={handlechangetelefono}
          value={telefono}
        />
        <TouchableOpacity
          style={styles.squareButton}
          onPress={() => navigation.navigate('pantallaB2', { variable: texto, tele: telefono })}
        >
          <Text style={styles.buttonText}>Mandar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function pantallaB2({ route }) {
  const navigation = useNavigation();
  const { variable, tele } = route.params;
  return (
    <View style={styles.centeredScreen}>
      <Text style={styles.text}>Hola {variable}, tu numero de telefono es {tele}</Text>
    </View>
  );
}

function pantallaC1() {
  const navigation = useNavigation();
  const [texto, handlechange] = React.useState('');

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Pantalla C1</Text>
      <TextInput
        style={styles.textinput}
        placeholderTextColor="#ccc"
        placeholder="Ingrese su dia de la semana favorito"
        onChangeText={handlechange}
        value={texto}
      />
      <TouchableOpacity
        style={styles.squareButton}
        onPress={() => navigation.navigate('pantallaC2', { variable: texto })}
      >
        <Text style={styles.buttonText}>Mandar</Text>
      </TouchableOpacity>
    </View>
  );
}

function pantallaC2({ route }) {
  const navigation = useNavigation();
  const { variable = 'No data received' } = route.params || {};
  return (
    <View style={styles.centeredScreen}>
      <Text style={styles.text}> tu dia de la semana favorito es el dia {variable}</Text>
    </View>
  );
}

function pantallaD1() {
  const navigation = useNavigation();
  const [texto, handlechange] = React.useState('');

  return (
    <View style={styles.homeScreen}>
      <Text style={styles.text}>Ajustes</Text>
      <TextInput
        style={styles.textinput}
        placeholderTextColor="#ccc"
        placeholder="Que te gustaria usar"
        onChangeText={handlechange}
        value={texto}
      />
    <TouchableOpacity
          style={styles.squareButton}
          onPress={() => navigation.navigate('pantallaD2', { variable: texto})}
        >
          <Text style={styles.buttonText}>Mandar</Text>
        </TouchableOpacity>
    </View>
  );
}

function pantallaD2({ route }) {
  const navigation = useNavigation();
  const { variable } = route.params;

  return (
    <View style={styles.centeredScreen}>
      <Text style={styles.text}>{variable}</Text>
    </View>
  );
}

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeStackNavigator();

function StackANavigator() {
  return (
    <StackA.Navigator>
      <StackA.Screen name="pantallaA1" component={pantallaA1} />
      <StackA.Screen name="pantallaA2" component={pantallaA2} />
    </StackA.Navigator>
  );
}

function StackBNavigator() {
  return (
    <StackB.Navigator>
      <StackB.Screen name="pantallaB1" component={pantallaB1} />
      <StackB.Screen name="pantallaB2" component={pantallaB2} />
    </StackB.Navigator>
  );
}

function StackCNavigator() {
  return (
    <StackC.Navigator>
      <StackC.Screen name="pantallaC1" component={pantallaC1} />
      <StackC.Screen name="pantallaC2" component={pantallaC2} />
    </StackC.Navigator>
  );
}

function StackDNavigator() {
  return (
    <StackD.Navigator>
      <StackD.Screen name="pantallaD1" component={pantallaD1} />
      <StackD.Screen name="pantallaD2" component={pantallaD2} />
    </StackD.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="OpcionA"
        component={StackANavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="football" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="OpcionB"
        component={StackBNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="OpcionC"
        component={StackCNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />,
        }}
      />
      <Tab.Screen
        name="OpcionD"
        component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  homeScreen: {
    flex: 1,
    backgroundColor: '#4a90e2',
  },
  bannerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  centeredScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
  },
  textinput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  squareButton: {
    width: 60,
    height: 60,
    backgroundColor: '#ff6347',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
