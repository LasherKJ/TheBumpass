import React from 'react';
import {View, StyleSheet,Dimensions,Image} from 'react-native'
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default class LocSearch extends React.Component{
    constructor(props){
        super(props)
        this.state={}
        this.mapRef = React.createRef();
    }
    componentDidUpdate(prevProps){
        if(prevProps.resultsArr !== this.props.resultsArr){
            this.boundsMaker()
        }
    }
    render(){
        const lite = []
        const dark = [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#242f3e"
                }
              ]
            },
            {
              "featureType": "administrative.locality",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#263c3f"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6b9a76"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#38414e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#212a37"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9ca5b3"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#746855"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#1f2835"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#f3d19c"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2f3948"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#d59563"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#515c6d"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#17263c"
                }
              ]
            }
          ]

        return(
            <View style={styles.mapCon}>
                <MapView 
                    ref={this.mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapStyle}
                    showsUserLocation={true}
                    initialRegion={this.props.userLoc}
                    userLocationAnnotationTitle={''}//hides the 'my location tooltip'
                    customMapStyle={this.props.mode === 1 ? dark : lite}
                >
                    {this.props.resultsArr !== undefined && this.markersMaker()}
                </MapView>
            </View>
        )
    }

    markersMaker = () =>{
        const markers = this.props.resultsArr.map((marker, index) => {
            return(
                <Marker
                    key={index}
                    coordinate={marker.coords}
                    title={marker.title}
                    onPress={this.props.locationChosen}
                    onDeselect={this.props.locationDeChosen}
                >
                  <Image source={require('../map/pin.png')} style={{height:37,width:23}}/>
                </Marker>
                )
            })
        return markers
    }

    boundsMaker(){
        if(this.props.resultsArr.length >= 1){
            const arr = this.props.resultsArr.slice(0,10).map((result, index) =>{
                return result.coords
            })
            arr.push(this.props.userLoc)
            this.mapRef.current.fitToCoordinates(arr,{
                animated:false,
                edgePadding:{
                    top:175,
                    right:50,
                    left:50,
                    bottom:100
                }
            })
        }
    }
}

const styles = StyleSheet.create({
    mapCon:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0
    },
    mapStyle:{
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    }
})