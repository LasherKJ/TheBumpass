import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MapPage from './components/mapPage/MapPage';
import Navigate from './components/Navigate/Navigate';
import Arrived from './components/arrived/Arrived';
import Toolbar from './components/toolbar/Toolbar'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      view:0,
      dest:null,
      mode:0
    }
  }

  render(){

    const views = [
      <MapPage 
        changeView={this.changeView}
        dest={this.state.dest}
        mode={this.state.mode}
      />
      ,
      <Navigate
          changeView={this.changeView}
          dest={this.state.dest}
          mode={this.state.mode}
        />
      ,
    <Arrived/>
    ]

    return(
      <View style={styles.container}>
        <View style={styles.comp}>
          {views[this.state.view]}
        </View>
        <View
          style={styles.toolBar}
        >
          <Toolbar 
            changeView={this.changeView}
            changeStyle={this.changeStyle}
            dest={this.state.dest}
            mode={this.state.mode}
          />
        </View> 
      </View>
    )
  }
  
  changeView = (obj) =>{
    if(obj.dest && obj.dest !== null){
      nDest = obj.dest
    }else{
      nDest = null
    }
    this.setState({
      view:obj.view,
      dest:nDest
    })
  }

  changeStyle = () =>{
    if(this.state.mode === 0){
      this.setState({
        mode:1
      })
    }else{
      this.setState({
        mode:0
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column'
  },
  comp:{
    flex:9,
    width:'100%'
  },
  toolBar:{
    flex:1,
    backgroundColor:'red',
    width:'100%'
  }
});
