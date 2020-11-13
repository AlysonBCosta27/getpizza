import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const ProductRow = (props)=>{
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{props.name}</Text>
            </View>
            <View>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 25,
        marginBottom: 5,
        shadowColor: '#000',
        elevation: 1,
    },
    title:{
        fontSize: 20,
        color: "#e22424",
    },
    desc:{
        color: "#626262",
    }
});

export default ProductRow;