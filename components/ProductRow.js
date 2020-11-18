import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import QtdButton from './QtdButton';


const ProductRow = (props)=>{
    return(
        <View>
            <View style={styles.card}>
                <View style={styles.left}>
                    <View style={styles.titleAndPrice}>
                        <Text style={styles.title}>{props.name}</Text>
                        <Text style={styles.price}>R$ {props.price}</Text>
                    </View>
                    <View>
                        <Text style={styles.desc}>{props.desc}</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Image source={{uri: props.img}} style={styles.image}/>
                </View>
            </View>
            <QtdButton/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25,
        marginBottom: 5,
        flex: 1,
        flexDirection: "row",
        
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: -5
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        overflow: "hidden"
    },
    title:{
        fontSize: 20,
        color: "#e22424",
        fontWeight: "bold"
    },
    desc:{
        color: "#626262",
    },
    image:{
        width: 85,
        height: 70
    },
    left:{
        flex: 3,
        paddingHorizontal: 10
    },
    right:{
        flex: 1
    },
    price:{
        fontSize: 15,
        color: "#e22424",
        fontWeight: "bold"
    },
    titleAndPrice:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default ProductRow;