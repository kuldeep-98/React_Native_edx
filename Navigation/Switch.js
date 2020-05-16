import React from 'react';
import { Button, Text,View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

class ScreenComponentOne extends React.Component{
  render(){
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:25,
        borderColor:'teal'
      }}>
        <Button title="Go to Screen Two" onPress={()=>this.props.navigation.navigate('RouteNameTwo')}/>
      </View> 
    )
  }
}
class ScreenComponentTwo extends React.Component{
  render(){
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:25,
        borderColor:'orange'
      }}>
        <Button title="Go to Screen Two" onPress={()=>this.props.navigation.navigate('RouteNameOne')} />
      </View> 
    )
  }
}
const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
  RouteNameTwo: ScreenComponentTwo,
})

export default createAppContainer(AppNavigator);
