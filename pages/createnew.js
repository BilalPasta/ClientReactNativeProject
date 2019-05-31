
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,InteractionManager,ActivityIndicator} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler';
export default class CreateNew extends Component{

    static navigationOptions = {
        title: 'Create New',
        ShowScreen:false
      };

      state={
        name:'',
        email:'',
        phoneno:'',
        address1:'',
        address2:'',
        zipcode:'',
        city:'',
        state:'',
        country:'',
        cardnumber:'',
        month:'',
        year:'',
        cvv:''
    }
    componentDidMount(){
      // 1: Component is mounted off-screen
      
      InteractionManager.runAfterInteractions(() => {
    this.setState({ShowScreen:true})
     
     });
    }
    render(){
        return(
      this.state.ShowScreen?(    <ScrollView>
            <View style={{flex:1,margin:10,backgroundColor:'#fff'}}>
            <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Name'
        value={this.state.name}
        onChangeText={name => this.setState({ name })}
      /> 
           <TextInput
           
           style={{marginBottom:5,backgroundColor:'#fff'}}
        label='Email'
        value={this.state.email}
        onChangeText={email => this.setState({ email })}
      />
     
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Contact'
        value={this.state.phoneno}
        onChangeText={phoneno => this.setState({ phoneno })}
      />
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Address1'
        value={this.state.address1}
        onChangeText={address1 => this.setState({ address1 })}
      />
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Address2'
        value={this.state.address2}
        onChangeText={address2 => this.setState({ address2 })}
      />
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Zipcode'
        value={this.state.zipcode}
        onChangeText={zipcode => this.setState({ zipcode })}
      />
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='City'
        value={this.state.city}
        onChangeText={city => this.setState({ city })}
      />
       <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='State'
        value={this.state.state}
        onChangeText={state => this.setState({ state })}
      />
        <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Country'
        value={this.state.country}
        onChangeText={country => this.setState({ country })}
      />
      <Text style={{fontSize:16,fontWeight:'bold',color:'#9400D3'}}>Credit Card Information
        </Text>
        <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='Card Number'
        value={this.state.cardnumber}
        onChangeText={cardnumber => this.setState({ cardnumber })}
      />
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TextInput
           style={{marginBottom:5,backgroundColor:'#fff',flex:1,marginRight:5}}
           label='Month'
        value={this.state.month}
        onChangeText={month => this.setState({ month })}
      />
         <TextInput
           style={{marginBottom:5,backgroundColor:'#fff',flex:1,marginRight:5}}
           label='Year'
        value={this.state.year}
        onChangeText={year => this.setState({ year })}
      />
         <TextInput
           style={{marginBottom:5,backgroundColor:'#fff',flex:1,marginRight:5}}
           label='CVV'
        value={this.state.cvv}
        onChangeText={cvv => this.setState({ cvv })}
      />
          </View>

<Button icon="add-a-photo" mode="contained" onPress={() => 
  this.props.navigation.navigate('Profile',
  
  {name:this.state.name,email:this.state.email,phoneno:this.state.phoneno,
  address1:this.state.address1,address2:this.state.address2,
  zipcode:this.state.zipcode,state:this.state.state,country:this.state.country})}>
    Save
  </Button>
                </View>
                </ScrollView>):(
                  <ActivityIndicator size="small" 
                  style={{flex:1,alignItems:'center',justifyContent:'center'}} 
                   color="#db0000"/>
                )
        )
    }
}