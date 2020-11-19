import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert, Linking} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const QtdButton = (props) => {

    const [qtd, setQtd] = useState(1);
    const [showAlert, setShowAlert] = useState(false);

    const addPizza = () => {
        setQtd(qtd+1);
    }

    const removePizza = () => {
        if(qtd>0){
            setQtd(qtd-1);
        }   
    }

    const sendMessage = () => {
        const message = `Olá, gostaria de fazer um pedido.
        Quero ${qtd} pizza de ${props.name}`;

        const url = `whatsapp://send?text=${message}&phone=5516988450455`;

        Linking.openURL(url);
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
            <TouchableOpacity
                onPress={()=>{setShowAlert(!showAlert)}}
            >
                <View style={styles.addButton}>
                    <Text style={styles.whiteText}>Adicionar ao Carrinho</Text>
                </View>
            </TouchableOpacity>
            <AwesomeAlert
                show={showAlert}
                title="Finalizar pedido"
                message="Deseja finalizar o pedido?"
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Continuar comprando"
                confirmText="Finalizar pedido"
                confirmButtonColor="#97dc91"
                onConfirmPressed={()=>{
                    sendMessage();
                }}
                onCancelPressed={()=>{
                    setShowAlert(!showAlert);
                }}
                closeOnHardwareBackPress={false} //para quando eu pressionar Voltar, não bugar o alerta.
            />
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