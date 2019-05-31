
import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class Dashboard extends Component{

    static navigationOptions = {
        // title: 'DashBoard',
header:null
    };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#000'}}>
            <View style={{flex:2,}}>
            <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',color:'#fff',marginTop:20}}>DashBoard
                </Text>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>     this.props.navigation.navigate('Additem')}>
                    <Text style={{textAlign:'center',fontSize:15,color:'#fff'}}>
                        AddItem
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>     this.props.navigation.navigate('Profile')}>
                    <Text style={{textAlign:'center',fontSize:15,color:'#fff'}}>
                        Profile
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flex:1}}>
                <TouchableOpacity onPress={()=>     this.props.navigation.navigate('Setting')}>
                    <Text style={{textAlign:'center',fontSize:15,color:'#fff'}}>
                        Setting
                        </Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        )
    }
}