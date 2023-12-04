
import React, { useState } from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-web';



function CustomDrawerLeft( props ){
    // IF we click in a screen, we add a screen 
    // IF we click in a screen, we remove the screen
    let i = 0;
    console.log("Props : " + props);
    const [fields, setFields] = useState([]);

const addField = () => {
  setFields([...fields, <YourFieldComponent key={fields.length} />]);
};



const YourFieldComponent = (props) => (
  <View style={{
    flex: 1,
    height: 150,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'colum',
    backgroundColor: "#D9D9D9",
    margin: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black"
  }}>
    <TouchableOpacity style={{ margin : 20 , flex:1  }}>
    <DrawerItem label="Scénario #1" icon="home" onPress={() => i++}/>
    <Image style={{ width: 200, height: 100 }} source={require('../assets/field/field1.png')} />
    </TouchableOpacity>
    <TextInput style={{ margin : 5, padding: 5, justifyContent: 'center'}} placeholder="Scénario #1" />
  </View>

);

    return(
      <View style={{ flex: 1}}>
        <View name="Header" style={{backgroundColor: '#D9D9D9', flexDirection: 'row', height: "10%", alignItems : 'center',  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
          <TouchableOpacity onPress={() => i++} style={{width: 20, height: 20 , alignItems : 'center', justifyContent : 'center' , marginRight: 5, marginLeft:5}}>
            <Image  style ={{width: 20, height: 20 , marginLeft: 20}} source={require('../assets/cross.png')}/>
          </TouchableOpacity>
          <Text style={{marginLeft: 20, fontSize: 16 , fontFamily: 'roboto'}}>Sélectionner un scénario</Text>
          <TouchableOpacity onPress={() => i++} style={{width: 20, height: 20 , alignItems : 'center', justifyContent : 'center' , marginRight: 5, marginLeft:5}}>
          <Image  style ={{width: 20, height: 20}} source={require('../assets/crayon.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => i++} style={{width: 20, height: 20 , alignItems : 'center', marginRight:5, justifyContent : 'center' }}>
          <Image style = {{width:20 , height:20 }} source={require('../assets/trash.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#959595', marginBottom: 10, boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)', height: "85%"}}>
        <View name="Field Add">
          <TouchableOpacity onPress={() => addField()} style={{height: 150, alignItems : 'center', justifyContent : 'center', flexDirection: 'colum' , backgroundColor : "#D9D9D9" , margin: 10 , borderRadius: 10, borderWidth: 2, borderColor : "black" }}>
              <Image style ={{width: 20, height: 20 , marginLeft: 20}} source={require('../assets/plus.png')}/>
          </TouchableOpacity>
          {fields.map((field, index) => (
            <YourFieldComponent key={index} />
          ))}
          
        </View>
      </View>
      </View>
    )
  }
  export default CustomDrawerLeft;