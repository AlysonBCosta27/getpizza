import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import GetPizzaHeader from '../components/GetPizzaHeader';
import ProductRow from '../components/ProductRow';
import axios from 'axios';


const App = () => {

  const [pizzas, setPizzas] = useState();

  const fetchPizza = async () =>{
    const response = await axios.get('https://my-json-server.typicode.com/AlysonBCosta27/getpizza-data/pizzas');
    setPizzas(response.data);
  }

  useEffect(()=>{
    fetchPizza();
});

  return(
    <View style={styles.container}>
      <GetPizzaHeader/>
      <FlatList
        data={pizzas}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <ProductRow
            name={item.name}
            desc={item.desc}
            img= {item.img}
            price= {item.price}
          />
        }
      />

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