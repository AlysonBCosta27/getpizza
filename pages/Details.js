import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Header} from 'react-native-elements';

import GetPizzaHeader from '../components/GetPizzaHeader';

const Details = () =>{
    const route = useRoute();
    const pizza = route.params.props;
    console.log(pizza);
    return (
            <View style={styles.container}>
            <GetPizzaHeader/>
              <View>
                  <Text>{pizza.name}</Text>
                  <Text>{pizza.desc}</Text>
              </View>
          </View>
)}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
  });

export default Details