
//DELETE THIS 

import React from 'react';
import * as Location from 'expo-location';

export function UserLocation(){
    navigator.geolocation.getCurrentPosition(
        position => {return(JSON.stringify(position))},
        error => {return(alert(error))}
    )
    // return JSON.stringify(loc)
}

export default UserLocation