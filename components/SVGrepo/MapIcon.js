
import React from 'react'
import Svg, {Path, G, Rect} from 'react-native-svg';

class MapIcon extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Svg version="1.1"
				xmlns="http://www.w3.org/2000/svg" 
				x="0px" y="0px"
				viewBox="0 0 490 490"
				height="100%"
				width="100%"
				>
				<G fill={this.props.fill}>
					<Rect x="148.041" y="216.96" width="30.625" height="54.573"/>
					<Rect x="148.041" y="119.858" width="30.625" height="54.573"/>
					<Path d="M312.56,481.206v0.365h0.586l13.52,8.428l14.04-8.428h2.479v-1.488L490,391.949V0.001L401.161,57.43
						c-19.415-17.541-45.063-28.313-73.289-28.313c-28.755,0-54.84,11.172-74.376,29.301l-74.831-48.24V8.641h-2.383l-13.403-8.64
						L0,82.979V490L163.334,388.18L312.56,481.206z M327.873,59.742c43.487,0,78.866,35.379,78.866,78.866
						c0,7.161-0.961,14.26-2.854,21.103c-0.727,2.628-1.601,5.241-2.598,7.774l-2.265,5.148l-71.151,131.493l-71.018-131.233
						l-2.561-5.821c-0.92-2.376-1.736-4.85-2.432-7.362c-1.893-6.842-2.854-13.941-2.854-21.102
						C249.006,95.121,284.385,59.742,327.873,59.742z M30.625,434.821V101.748L148.041,41.93V77.33h30.625V46.614l55.411,35.721
						c-9.898,16.461-15.696,35.666-15.696,56.273c0,10.139,1.385,19.954,3.964,29.272c1.033,3.732,2.253,7.385,3.66,10.945l3.32,7.544
						l98.549,182.106L426.55,186.11l2.993-6.799c1.488-3.714,2.778-7.529,3.858-11.431c2.578-9.318,3.964-19.133,3.964-29.272
						c0-21.116-6.08-40.766-16.435-57.49l38.446-24.854v318.349l-116.19,69.75v-33.359H312.56v34.113l-133.026-82.926l-0.868-0.541
						v-47.59h-30.625v47.565l-0.909,0.566L30.625,434.821z"/>
					<Path d="M327.873,186.061c26.755,0,48.443-21.689,48.443-48.444s-21.688-48.444-48.443-48.444
						c-26.756,0-48.444,21.689-48.444,48.444S301.117,186.061,327.873,186.061z M327.873,119.798c9.826,0,17.818,7.994,17.818,17.819
						s-7.993,17.819-17.818,17.819c-9.825,0-17.819-7.994-17.819-17.819S318.047,119.798,327.873,119.798z"/>
				</G>
			</Svg>
		)
	}
}
export default MapIcon