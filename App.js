import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import logo from './assets/logo.png';

function App() {
  const [list, setList] = useState([]);
  const [txt, setTxt] = useState('');

  let del = i => {
    console.log(i);
    list.splice(i, 1);
    setList([...list]);
  };

  let add = () => {
    console.log('Add Function Start');
    setList([...list, txt]);
  };
  return (
    <>
        <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWqj9zM9vzBi8Dpyn5OKHCVgqydIPRz7sUg&usqp=CAU'}}>
      
      <View style={styles.container}>
        <View>
          <Image source={logo} style={{width: 340, height: 110}} />
        </View>
        <Text style={{color: "white", fontSize: 45, textAlign: 'center'}}>TODO APP</Text>
        <View style={{flexDirection:'row'}}>
          <TextInput
            onChangeText={e => setTxt(e)}
            style={{backgroundColor: "white",color: "cornflowerblue", width: 280, height: 70, fontSize 30}}
            placeholder="Enter Todo"
          />
          <Button  title=" Add " onPress={add}  />
        </View>
        <Text>{txt}</Text>
        {list.map((x, i) => (
          <View key={i}>
            <Text style={{color: 'white', fontSize: 25}}>{x}</Text>
            {/* <Button title="Delete" color="black" onPress={() => del(i)} /> */}
            <TouchableOpacity onPress={() => del(i)}>
              <Image
                style={{width: 30, height: 30}}
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/256x256/DeleteRed.png',
                }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      </ImageBackground>
    </>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  heading: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  input: {
    padding: 10,
    fontSize: 30,
    borderWidth: 2,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
