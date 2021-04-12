import React from 'react';
import {Image,View, Text, StyleSheet} from 'react-native'

function Arrived(){
    return(
        <View>
            <Text style={styles.Text}>You made it!</Text>
            <Text style={styles.Text}>Hot dang!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Text:{
        fontSize:72,
        textAlign:'center'
    }
})
export default Arrived