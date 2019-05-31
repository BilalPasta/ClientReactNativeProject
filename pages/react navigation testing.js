import React from 'react';
import { View, Text ,Button,TouchableOpacity,InteractionManager} from 'react-native';
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         {/* <Button
//           title=""
          
//         /> */}
//         <TouchableOpacity onPress={() => this.props.navigation.navigate('Details',{
//            itemId: 86,
//            otherParam: 'anything you want here',
//         })}>
//        <Text> Go to Details</Text>
//           </TouchableOpacity>
    
//       </View>
//     );
//   }
// }


// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>SettingsScreen</Text>
//         {/* <Button
//           title=""
          
//         /> */}
//         <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
//        <Text> Go to Profile</Text>
//           </TouchableOpacity>
    
//       </View>
//     );
//   }
// }

// class ProfileScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>ProfileScreen</Text>
//         {/* <Button
//           title=""
          
//         /> */}
//         {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
//        <Text> Go to Details</Text>
//           </TouchableOpacity> */}
    
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   state={
//     list:[20]
//   }
//   render() {
//     return (
//       <ScrollView>
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
//         <Text>Details Screen</Text>
    
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}
//      {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

// {this.state.list.map(()=>    <Text>Details Screen</Text>)}

//       </View>
//       </ScrollView>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );


// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   Details: DetailsScreen,
// });

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
//   Profile: ProfileScreen,
// });

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     Settings: SettingsStack,
//   }
// );




class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  state={
    showscreen:false
  }
  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      this.state.showscreen?
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>:(null)
    );
  }

  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
    
      this.setState({
        showscreen: true,
      });
    });
  }
}


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
      // gesturesEnabled: true,
      // gesturesDirection: 'inverted',
    },
    headerMode:'screen',
    transitionConfig: () => ({
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;
        const width = layout.initWidth;
  
        return {
          opacity: position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [ 0, 1, 0],
          }),
          transform: [{
            translateX: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [-width, 0, width],
            }),
          }]
        };
      },
      // headerTitleInterpolator: sceneProps => {
      //   const { layout, position, scene } = sceneProps;
      //   const { index } = scene;
  
      //   return {
      //     opacity: position.interpolate({
      //       inputRange: [index - 1, index, index + 1],
      //       outputRange: [ 0, 1, 0],
      //     }),
      //     transform: [{
      //       translateX: position.interpolate({
      //         inputRange: [index - 1, index, index + 1],
      //         outputRange: [-50, 0, 50],
      //       }),
      //     }]
      //   };
      // },
    }),
  
  }
);
const AppContainer = createAppContainer(RootStack);

export default AppContainer;