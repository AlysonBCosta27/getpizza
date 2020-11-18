import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const QtdButton = () => {

    const [qtd, setQtd] = useState(1);

    const addPizza = () => {
        setQtd(qtd+1);
    }

    const removePizza = () => {
        if(qtd>0){
            setQtd(qtd-1);
        }   
    }

    return(
        <View style={styles.container}>
            <View style={styles.qtdButton}>
                <TouchableOpacity 
                    onPress= {removePizza}
                    style={styles.btnLeft}>
                    <Text style= {styles.textBtn}>-</Text>
                </TouchableOpacity>
                <View style={styles.input}>
                    <Text style={styles.textInput}>{qtd}</Text>
                </View>
                <TouchableOpacity
                    onPress= {addPizza}
                    style={styles.btnRight}
                >
                    <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <View style={styles.addButton}>
                    <Text style={styles.whiteText}>Adicionar ao Carrinho</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-around"
    },
    qtdButton:{
        flexDirection: "row"
    },
    btnLeft:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    btnRight:{
        width:40,
        height:40,
        backgroundColor:"#f0bf00",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    input:{
        width:40,
        height: 40,
        backgroundColor: "#fff",
        elevation: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    textBtn:{
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    },
    textInput:{
        fontSize: 15,
        color: "#676767",
    },
    addButton:{
        width: 150,
        height: 40,
        backgroundColor: "#f0bf00",
        alignItems: "center",
        borderRadius: 10,
        elevation: 2
    },
    whiteText:{
        color: "#fff"
    }
});

export default QtdButton;