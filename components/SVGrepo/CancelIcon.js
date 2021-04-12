
import React from 'react'
import { View } from 'react-native'
import Svg, {G, Path} from 'react-native-svg';

class CancelIcon extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Svg 
			   x="0" 
			   y="0"
			   viewBox="0 0 489 489"
			   height="100%"
			   width="100%">
			   <G fill={this.props.fill}>
				   <Path d="M244.5,0C109.3,0,0,109.3,0,244.5S109.3,489,244.5,489S489,379.7,489,244.5S379.7,0,244.5,0z M244.5,448.4
					   c-112.4,0-203.9-91.5-203.9-203.9S132.1,40.6,244.5,40.6s203.9,91.5,203.9,203.9S356.9,448.4,244.5,448.4z"/>
				   <Path d="M354.8,134.2c-8.3-8.3-20.8-8.3-29.1,0l-81.2,81.2l-81.1-81.1c-8.3-8.3-20.8-8.3-29.1,0s-8.3,20.8,0,29.1l81.1,81.1
					   l-81.1,81.1c-8.3,8.3-8.6,21.1,0,29.1c6.5,6,18.8,10.4,29.1,0l81.1-81.1l81.1,81.1c12.4,11.7,25,4.2,29.1,0
					   c8.3-8.3,8.3-20.8,0-29.1l-81.1-81.1l81.1-81.1C363.1,155,363.1,142.5,354.8,134.2z"/>
			   </G>
		   </Svg> 
		)
	}
}


export default CancelIcon
