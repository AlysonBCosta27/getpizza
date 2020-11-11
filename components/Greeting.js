import React from 'react';
import {View , Text} from 'react-native';

const Greeting = (props) => {
    return(
        <View>
            <Text>Eai {props.name}</Text>
        </View>
    )

}

export default Greeting;