import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerLeft from './drawer/DrawerLeft.js';
import { ScreenArrays } from './drawer/const.js';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function DisplayField(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{props.name}</Text>
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App () {
  var props = ScreenArrays;
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerLeft {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="DisplayField" component={DisplayField} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
