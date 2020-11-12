import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import logo from './assets/logo.png';

const App = () => {
  return(
    <View style={styles.container}>
      <Header
       backgroundColor='#131313'
      >
        <View/>
        <Image source={logo} style={styles.logo}/>
        <Icon
          type='font-awesome'
          color='#fff'
          name='shopping-cart'
        />
      </Header>

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  logo:{
    width:30,
    height: 30
  }
});

export default App;