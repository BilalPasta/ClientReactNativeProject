
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,InteractionManager,ActivityIndicator} from 'react-native';
import {Button} from 'react-native-paper'
export default class Profile extends Component{
    static navigationOptions = {
        title: 'Profile',
      };

      state={
        ShowScreen:false
,
          name:'Bilal Usman',
          email:'bilalusman@gmail.com',
          phoneno:'98798798',
          address1:'abc abc abc',
          address2:'abc abc abc',

          zipcode:'75300',
          city:'karachi',
          state:'sindh',
          country:'pakistan'
      }


      componentDidMount(){
        // 1: Component is mounted off-screen
        
        InteractionManager.runAfterInteractions(() => {
      this.setState({ShowScreen:true})
       
       });
      }
    render(){
        const { navigation } = this.props;
        const name = navigation.getParam('name');
        const email = navigation.getParam('email');
        const phoneno = navigation.getParam('phoneno');
        const address1 = navigation.getParam('address1');
        const address2 = navigation.getParam('address2');
        const zipcode = navigation.getParam('zipcode');
        const city = navigation.getParam('city');
        const state = navigation.getParam('state');
        const country = navigation.getParam('country');
// this.setState({
//     name:name,
//     email:email,
//     phoneno:phoneno,
//     address1:address1,
//     address2:address2,
//     zipcode:zipcode,
//     city:city,
//     state:state,
//     counrty:country

// // })
// alert(country);
        return(
            this.state.ShowScreen?(<View style={{flex:1,margin:10}}>
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Name
                        </Text>
                <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{name||this.state.name}
              </Text>
                    </View>
          
              
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Email
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{email||this.state.email}
              </Text>
              </View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Contact
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{phoneno||this.state.phoneno}
              </Text>
              
              </View>

              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.address1}
              </Text> */}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Address1
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{address1||this.state.address1}
              </Text>
              
              </View>

              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.address2}
              </Text> */}


<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Address2
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{address2||this.state.address2}
              </Text>
              
              </View>

              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.zipcode}
              </Text> */}


<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>ZipCode
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{zipcode ||this.state.zipcode}
              </Text>
              
              </View>

              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.city}
              </Text> */}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>City
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{city||this.state.city}
              </Text>
              
              </View>


              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.state}
              </Text> */}

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>State
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{state||this.state.state}
              </Text>
              
              </View>


              {/* <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10}}>{this.state.country}
              </Text> */}




<View style={{flexDirection:'row',justifyContent:'space-between'}}>
<Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>Country
              </Text>
              <Text style={{fontSize:15,fontWeight:'bold',marginBottom:10,flex:1}}>{country||this.state.country}
              </Text>
              
              </View>

             </View>
         
    <Button  mode="contained" onPress={() => this.props.navigation.navigate('CreateNew')}>
Create New  </Button>
                </View>):(<ActivityIndicator size="small" 
       style={{flex:1,alignItems:'center',justifyContent:'center'}} 
        color="#db0000"/>)
        )
    }
}