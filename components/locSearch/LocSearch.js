import React from 'react';
import {StyleSheet} from 'react-native'
import {SearchBar} from 'react-native-elements'

export default class LocSearch extends React.Component{
    constructor(props){
        super(props)
    }
    render(){ 
        return(
            <SearchBar
                containerStyle={{
                    backgroundColor:this.props.mode === 0 ? '#fff':'#000',
                    position:'absolute',
                    top:'10%',
                    width:'90%',
                    marginLeft:'5%',
                    borderRadius:10
                }}

                platform={"ios"}
                placeholder="Type Here..."
                value={this.props.search ? this.props.search : ''}

                onChangeText={this.props.updateSearch}
                onClear={this.props.clearSearch}
                onEndEditing={this.props.submitSearch}
            />
        )
    }
}

