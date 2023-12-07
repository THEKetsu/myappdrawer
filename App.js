import * as React from 'react';
import { View, Text , Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerLeft from './drawer/DrawerLeft.js';
import { ScreenArrays } from './drawer/const.js';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DisplayField(props) {
  console.log(props);
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center'}}>
      <Text>Scénario : {props.name}</Text>
      <Image style={{ width : 500, height: 500 }} source={require('./assets/field/field1.png')} />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App ( { navigation }) {
  var props = ScreenArrays;
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerLeft {...props} />}>
        <Drawer.Screen  name="My Home" component={HomeScreen} />
        <Drawer.Screen name="DisplayField" component={DisplayField}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
