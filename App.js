import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, FlatList, Text} from 'react-native';
import GetPizzaHeader from './components/GetPizzaHeader';
import ProductRow from './components/ProductRow';

const datas = [
  {
    id:1,
    name: "Quatro queijos",
    desc: "Mussarela, Parmesão, Provolone, Catupiry e Molho de tomate"
  },
  {
    id:2,
    name: "Rúcula",
    desc: "Mussarela de búfula, Rúcula e Molho de tomate"
  },
  {
    id:3,
    name: "Berinjela",
    desc: "Mussarela e antepasto de berinjela"
  }
]

const App = () => {
  return(
    <View style={styles.container}>
      <GetPizzaHeader/>
      <FlatList
        data={datas}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
          <ProductRow
            name={item.name}
            desc={item.desc}
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