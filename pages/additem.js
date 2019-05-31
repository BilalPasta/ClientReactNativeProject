
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,InteractionManager,ActivityIndicator} from 'react-native';
import { List,TextInput,Button } from 'react-native-paper';

export default class AddItem extends Component{
    static navigationOptions = {
        title: 'AddItem',
      };

      state={
        ShowScreen:false
,
          keyword:'',
          color:'',
          size:'',

      }


      componentDidMount(){
        // 1: Component is mounted off-screen
        
        InteractionManager.runAfterInteractions(() => {
      this.setState({ShowScreen:true})
       
       });
      }
    render(){
        return(
            this.state.ShowScreen?(<View style={{flex:1,margin:10}}>

<List.Accordion style={{marginBottom:5}}
          title="Category"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="Jackets" />
          <List.Item title="Coats" />
          <List.Item title="Shirts" />
          <List.Item title="Tops/Sweaters" />
          <List.Item title="SweatShirts" />
          <List.Item title="Pants" />
          <List.Item title="Shorts" />
          <List.Item title="T-Shirts" />
          <List.Item title="Hats" />
          <List.Item title="Bags" />
          <List.Item title="Accessoories" />
          <List.Item title="Shoes" />
          <List.Item title="Skate" />

        </List.Accordion>


<TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='keyword'
        value={this.state.text}
        onChangeText={keyword => this.setState({ keyword })}
      />
      <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='color'
        value={this.state.text}
        onChangeText={color => this.setState({ color })}
      />
      <TextInput
           style={{marginBottom:5,backgroundColor:'#fff'}}
           label='size'
        value={this.state.text}
        onChangeText={size => this.setState({ size })}
      />

<List.Accordion
style={{marginBottom:5}}
          title="Profile"
          left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <Button icon="add-a-photo" mode="contained" onPress={() => console.log('Pressed')}>
    Save
  </Button>
                          </View>):(<ActivityIndicator size="small" 
       style={{flex:1,alignItems:'center',justifyContent:'center'}} 
        color="#db0000"/>)
        )
    }
}