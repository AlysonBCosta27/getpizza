import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native';
import GetPizzaHeader from '../components/GetPizzaHeader';

const Details = () =>{
    const route = useRoute();
    const pizza = route.params.props;
    console.log(pizza);
    return (
        <View style={styles.container}>
            <GetPizzaHeader/>
                <View>
                    <Text>{pizza.desc}</Text>
                </View>
        </View>
)}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    logo:{
      width:30,
      height: 30
    },
  });

export default Details