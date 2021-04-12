import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const LocConfirm = (props) =>{
    return(
            <TouchableOpacity 
                style={{
                    position:'absolute',
                    left:'10%',
                    bottom:60,
                    alignItems:'center',
                    backgroundColor:props.mode === 0 ? '#fff':'#000',
                    width:'80%',
                    padding:20,
                    borderRadius:10
                }}
                onPress={props.locationConfirmed}
            >
                <Text style={{
                            backgroundColor:props.mode === 0 ? '#fff':'#000',
                            color:props.mode === 0 ? '#000':'#fff'
                    }}>
                    Let's Go
                </Text>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:'0%',
        width:'100%',
        height:200,
        // backgroundColor:'white'
    },
    button:{
        position:'absolute',
        left:'10%',
        bottom:100,
        alignItems:'center',
        backgroundColor:'white',
        width:'80%',
        padding:20,
        borderRadius:10
    },
    text:{
        fontSize:16
    }
})
export default LocConfirm