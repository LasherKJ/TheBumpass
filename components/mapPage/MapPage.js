import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Map from '../map/Map'
import LocSearch from '../locSearch/LocSearch'
import LocConfirm from '../locConfirm/LocConfirm'
import * as Permissions from 'expo-permissions'

class MapPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userLoc:null,
            search:'',
            chosenLocation:null
        };
    }
    componentDidMount(){
        //gets users location as a 'watch', similar to a setInterval but cooler
        this.checkLocationPermissions()
        if(this.props.dest !== null){
            this.setState({
                resultsArr:[{coords:this.props.dest}],
                chosenLocation:this.props.dest
            })
        }
    }
    componentWillUnmount(){
        //clears the 'watch'
        navigator.geolocation.clearWatch(this.watchID)
    }
   
    render(){
        if(this.state.userLoc){
            return(
                <View style={styles.container}>
                    <Map 
                        
                        resultsArr={this.state.resultsArr}
                        userLoc={this.state.userLoc}
                        locationChosen={this.locationChosen}
                        locationDeChosen={this.locationDeChosen}
                        mode={this.props.mode}
                    />
                    <LocSearch 
                        updateSearch={this.updateSearch}
                        submitSearch={this.submitSearch}
                        clearSearch={this.clearSearch}
                        search = {this.state.search}
                        userLoc={this.state.userLoc}
                        mode={this.props.mode}
                    />
                    {this.state.chosenLocation !== null && (
                        <LocConfirm 
                            mode={this.props.mode}
                            locationConfirmed = {()=> this.props.changeView({view:1,dest:this.state.chosenLocation})}
                        />
                    )}
                </View>
            )
        }else{
            return(
                <Text>Getting location ... </Text>
            )
        }
    }
    
    checkLocationPermissions = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION)
        if(status === "granted"){
            this.watchID = navigator.geolocation.watchPosition(position => {
                var loc = {
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude,
                    longitudeDelta:.15,
                    latitudeDelta:.15
                }
                this.setState({
                    userLoc:(loc)
                })
            })
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };

    clearSearch = () =>{
        this.setState({
            resultsArr:[]
        })
        this.locationDeChosen()
    }
    
    submitSearch = () => {
        this.setState({
            resultsArr:[]
        })
        const location = this.state.userLoc.latitude +','+this.state.userLoc.longitude;
        var baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?'
        baseURL = baseURL + '&query='+this.state.search
        baseURL = baseURL + '&location='+location+'&radius=2000'
        baseURL = baseURL + '&key='
        //Key removed for security reasons, will be added to an ignored keys file later
        fetch(baseURL).then(
            response => response.json()
        )
        .then((result) => {
            const results = result.results.map((res,index) =>{
                var location = {
                    coords :{
                        latitude:res.geometry.location.lat,
                        longitude:res.geometry.location.lng
                    },
                    title:res.name
                }
                return location
            })
            this.setState({
                resultsArr:results
                })
            }
        )
    }

    locationChosen = (marker) =>{
        this.setState({
            chosenLocation:marker.nativeEvent.coordinate
        })
      }
    
    locationDeChosen = () =>{
        this.setState({
            chosenLocation:null
        })
      }

}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      height:'100%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'pink',
      alignItems:'stretch',
      position:'relative'
    }
  });

  export default MapPage