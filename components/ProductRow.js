import React from 'react';
import { Image, ImagePropTypes, StyleSheet, Text, View } from 'react-native';
import QtdButton from './QtdButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';



const ProductRow = (props)=>{

    const navigation = useNavigation ();
    const navigateToDetails = () => {
        navigation.navigate('Details',{props});
    };

    return(
        <View style={styles.card}>
            <TouchableOpacity onPress={navigateToDetails}>
                <View style={styles.topCard}>
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
            </TouchableOpacity>
            <View style={styles.buttonMargin}>
                <QtdButton name={props.name}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25,
        marginBottom: 5,
        flex: 1,
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
    topCard:{
        flex: 1,
        flexDirection: "row"
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
    price:{
        fontSize: 15,
        color: "#e22424",
        fontWeight: "bold"
    },
    titleAndPrice:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonMargin:{
        flex: 1,
        marginVertical: 15
    }
});

export default ProductRow;