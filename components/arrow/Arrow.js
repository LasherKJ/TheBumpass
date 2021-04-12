import React from 'react';
import {Image, StyleSheet} from 'react-native';

function Arrow(props){
    const deg = props.bearing - props.compass + 'deg';
    return(
        <Image
            style={
                [
                    styles.image,
                    {
                        transform:[{ rotate: deg }]
                    }
                ]
            }
            source={require('./arrow.png')}
        />
    )
}

const styles=StyleSheet.create({
    image:{
        flex:1,
        resizeMode:'contain',
    }
})

export default Arrow