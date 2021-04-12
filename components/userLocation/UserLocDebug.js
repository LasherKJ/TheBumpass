import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default class UserLocDebug extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Text style={styles.debugText}>
                {this.props.text !== undefined ? this.props.text : ''}
            </Text>
        )
    }
}
const styles = StyleSheet.create({
    debugText:{
        position:'absolute',
        bottom:'0%',
        width:'100%',
        height:200,
        backgroundColor:'white'
    }
})