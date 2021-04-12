import React from 'react'
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native'
import * as Location from 'expo-location'
import {CalcInitialBearingDegrees, CalcDistanceMeters} from '../haversine/Haversine'
import Arrow from '../arrow/Arrow'

export default class Navigate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            compass:0,
            bearing:0,
            dist:'',
            time:1000,
            accuracy:2,
            unit:' '
        }
    }
    componentDidMount(){
        this.getUserHeading()
        this.getUserLocation()
    }
    componentWillUnmount(){
        this.location.remove()
        this.heading.remove()
    }
    render(){
        if(!this.location || !this.heading){
            return(<Text>Stand By</Text>)
        }
        return(
            <View style={{
                flex:1,
                flexDirection:'column',
                backgroundColor:this.props.mode === 0 ? '#fff':'#000'
            }}>
                <View style={styles.vertFiller}></View>
                <View style={styles.topCon}>
                    <View style={{flex:1}}></View>
                        <View style={{
                                    flex:3,
                            }}>
                        <Text style={{
                                fontSize:72,
                                textAlign:'center',
                                color:this.props.mode === 0 ? '#000':'#fff'
                            }}>
                            {this.state.distReadable}
                        </Text>
                        <Text style={{
                            fontSize:24,
                            textAlign:'center',
                            color:this.props.mode === 0 ? '#000':'#fff'
                        }}>
                            {this.state.unit}
                        </Text>
                    </View>
                        
                    <View style={{flex:1}}>

                    </View>
                </View>
                <View style={styles.imageCon}>
                    <View style={styles.filler}></View>
                    {/* <Text>{JSON.stringify(this.state.compass)}</Text>
                    <Text>{JSON.stringify(this.state.bearing)}</Text> */}
                    <View style={styles.arrowCon}>
                        <Arrow  
                            compass={this.state.compass}//degrees off north
                            bearing={this.state.bearing}//degrees off dest
                            />
                    </View>
                    <View style={styles.filler}></View>
                </View>
            </View>
        )
    }
    getUserLocation = async () =>{
        this.location = await Location.watchPositionAsync({accuracy:this.state.accuracy,timeInterval:this.state.time,distanceInterval:1},(location)=>{
            const lat1 = location.coords.latitude;
            const lon1 = location.coords.longitude;
            const lat2 = this.props.dest.latitude;
            const lon2 = this.props.dest.longitude;
            const bearing = CalcInitialBearingDegrees(lat1,lon1,lat2,lon2)
            const dist = (CalcDistanceMeters(lat1,lon1,lat2,lon2))
            this.setUnits(dist)
            this.setState({
                bearing:bearing,
                lat1:location.coords.latitude,
                lon1:location.coords.longitude,
                accuracy:this.setAccuracy(dist)
                })
            // return obj
            if(dist <= 6){ //if within ~20 ft, go to arrived screen
                this.props.changeView({view:2})
            }
        })
    }
    getUserHeading = async () =>{
        this.heading = await Location.watchHeadingAsync((location)=>{
            this.setState({
                compass:JSON.stringify(location.trueHeading)
            })
        })
    }
    setAccuracy(num){
        const time = 7 - Math.ceil(num / 1000)
        if(time >= 6){
            return 6
        }else if (time <=1){
            return 1
        }else{
            return time
        }
    }

    setUnits(num){
        var units = 0.00062137
        var unitName = 'miles'
        var tofix = 1
        if(num <= 800){
            units = 3.28084
            unitName = 'feet'
            tofix = 0
        }

        const readable = (num * units).toFixed(tofix)

        this.setState({
            dist:num,
            distReadable:readable,
            unit:unitName
        })
    }
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white'
    },
    vertFiller:{
        flex:1
    },
    topCon:{
        flex:4,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    button:{
        flex:1,
        justifyContent:'center',
        textAlign:'center'
    }, 
    buttonText:{
        textAlign:'center'
    },
    distCon:{
        flex:3
    },
    dist:{
        fontSize:72,
        textAlign:'center'
    },
    unit:{
        fontSize:24,
        textAlign:'center'
    },
    imageCon:{
        flex:8,
        width:'100%',
        height:'100%',
        alignItems:'center',
    },
    arrowCon:{
        flex:4,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    
    filler:{
        flex:1,
        width:'100%'
    }
})