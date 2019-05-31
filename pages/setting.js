
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Switch,ActivityIndicator,InteractionManager} from 'react-native';

export default class Setting extends Component{
    static navigationOptions = {
        title: 'Setting',
      };

      state = {
        isSwitchOn: false,
        ShowScreen:false

        
      };

      componentDidMount(){
        // 1: Component is mounted off-screen
        
        InteractionManager.runAfterInteractions(() => {
      this.setState({ShowScreen:true})
       
       });
      }
    render(){
        const { isSwitchOn } = this.state;

        return(
        this.state.ShowScreen?    (<View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{flex:1}}>
                Sign In Google
                </Text>
                <Switch
                style={{flex:1}}
        value={isSwitchOn}
        onValueChange={() =>
          { this.setState({ isSwitchOn: !isSwitchOn }); }
        }
      />
 
                </View>
                </View>):(
                  <ActivityIndicator size="small" 
                  style={{flex:1,alignItems:'center',justifyContent:'center'}} 
                   color="#db0000"/>
                )
        )
    }
}