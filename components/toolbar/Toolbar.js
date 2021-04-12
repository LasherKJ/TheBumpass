import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import CancelIcon from "../SVGrepo/CancelIcon.js"
import MapIcon from "../SVGrepo/MapIcon"
import MoonIcon from "../SVGrepo/MoonIcon"
import RotateIcon from "../SVGrepo/RotatoIcon"

class Toolbar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const fill = this.props.mode === 0 ? '#000':'#fff'
        return(
            <View style={{
                backgroundColor:this.props.mode === 0 ? '#fff':'#000',
                width:'100%',
                height:'100%',
                flexDirection:'row'
                }} >
                {/* <TouchableOpacity style={styles.button}> 
                    <RotateIcon fill={fill} />
                </TouchableOpacity> */}
                <View style={styles.filler}></View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.changeView({view:0,dest:this.props.dest})}
                    >
                    <MapIcon fill={fill} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.changeStyle()}
                    >
                    <MoonIcon fill={fill} />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.changeView({view:0,dest:null})}
                    >
                    <CancelIcon fill={fill} />
                </TouchableOpacity>
                <View style={styles.filler}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ToolbarCon:{
        width:'100%',
        height:'100%',
        flexDirection:'row'
    },
    button:{
        flex:2,
        margin:10
    },
    filler:{
        flex:1
    }
})

export default Toolbar