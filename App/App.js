import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput,ImageBackground } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

function pantallaA1(){
  const imageSource = require('./assets/FutbolArg.jpg')  
  const navigation = useNavigation();
    const [texto, handlechange] = React.useState('');
   
  return (
   
   <View style={styles.homeScreen}>
      <ImageBackground source={imageSource} style={styles.imageSource}>      
        <Text style={style.text}>Equipos Primera Division Argentina</Text>
      <TextInput style={styles.textinput}
        placeholderTextColor="#ccc"
        placeholder="Ingrese su equipo favorito del futbol argentino"
        onChangeText={handlechange}
        value={texto}></TextInput>
        <Button style={styles.Button} onPress={navigation.navigate('pantallaA2', {variable : texto})}> <Text style={styles.BotonTexto}>Mandar</Text></Button>
        </ImageBackground>
    </View>
  )
}

function pantallaA2({route}){
  const navigation = useNavigation();
  const {variable} = route.params;
  const [texto, handlechange] = React.useState('');
  return (
    <View style={styles.homeScreen}>
    <Text style={style.text}>Sos hincha del equipo {variable}</Text>
    <TextInput style={styles.textinput}
        placeholderTextColor="#ccc"
        placeholder="Ingrese su jugador favorito"
        onChangeText={handlechange}
        value={texto}></TextInput>
         <Button style={styles.Button}> <Text style={styles.BotonTexto}>Mandar</Text></Button>
    </View>
  )
}

function pantallaB1(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View>
  )
}

function pantallaB2(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View> )
}

function pantallaC1(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View> )
}

function pantallaC2(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View> )
}

function pantallaD1(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View> )
}

function pantallaD2(){
  const navigation = useNavigation();
  return (
    <View style={styles.homeScreen}>
      <Text style={style.text}>HOME 2</Text>
    </View> )
}

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
      <SBackB.Screen name="pantallaB1" component={pantallaB1} />
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

const StackA = createNativeStackNavigator();
const StackB = createNativeStackNavigator();
const StackC = createNativeStackNavigator();
const StackD = createNativeTabNavigator();

const Tab = createBottomTabNavigator();
function BottonNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Opcion"     component={StackANavigator} />
      <Tab.Screen name="Opcion" component={StackBNavigator} />
      <Tab.Screen name="Opcion" component={StackCNavigator} />
      <Tab.Screen name="Opcion"   component={StackDNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
           ),
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ff0000'
  }
});


