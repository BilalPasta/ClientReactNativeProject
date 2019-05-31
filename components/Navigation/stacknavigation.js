
import { createStackNavigator, createAppContainer ,createBottomTabNavigator} from 'react-navigation';

// import SignIn from '../../pages/signin';
// import SignUp from '../../pages/signup';
// import Main from '../../pages/main';

// const AuthStack=createStackNavigator(
//     {
//         Main:Main,
//         SignIn:SignIn,
//         SignUp:SignUp
//     }, {
//         initialRouteName: 'Main',
//         defaultNavigationOptions: {
//         //   headerTintColor: '#fff',
//         //   headerStyle: {
//         //     backgroundColor: '#000',
//         //   },
//           // gesturesEnabled: true,
//           // gesturesDirection: 'inverted',
//         },
//         headerMode:'screen',
//         transitionConfig: () => ({
//           screenInterpolator: sceneProps => {
//             const { layout, position, scene } = sceneProps;
//             const { index } = scene;
//             const width = layout.initWidth;
      
//             return {
//               opacity: position.interpolate({
//                 inputRange: [index - 1, index, index + 1],
//                 outputRange: [ 0, 1, 0],
//               }),
//               transform: [{
//                 translateX: position.interpolate({
//                   inputRange: [index - 1, index, index + 1],
//                   outputRange: [-width, 0, width],
//                 }),
//               }]
//             };
//           },
//           headerTitleInterpolator: sceneProps => {
//             const { layout, position, scene } = sceneProps;
//             const { index } = scene;
      
//             return {
//               opacity: position.interpolate({
//                 inputRange: [index - 1, index, index + 1],
//                 outputRange: [ 0, 1, 0],
//               }),
//               transform: [{
//                 translateX: position.interpolate({
//                   inputRange: [index - 1, index, index + 1],
//                   outputRange: [-50, 0, 50],
//                 }),
//               }]
//             };
//           },
//         }),
      
//       }
// )


// export default createAppContainer(AuthStack);



import Additem from '../../pages/additem'; 
import Setting from '../../pages/setting';
import Profile from '../../pages/profile'; 
import CreateNew from '../../pages/createnew'; 
import Dashboard from '../../pages/dashboard'; 




const Routing=createStackNavigator(
  {
     Dashboard:Dashboard,
     Additem:Additem,
    Profile:Profile,
    CreateNew:CreateNew,
    Setting:Setting,


  }, {
      initialRouteName: 'Dashboard',
      defaultNavigationOptions: {
      //   headerTintColor: '#fff',
      //   headerStyle: {
      //     backgroundColor: '#000',
      //   },
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
        headerTitleInterpolator: sceneProps => {
          const { layout, position, scene } = sceneProps;
          const { index } = scene;
    
          return {
            opacity: position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [ 0, 1, 0],
            }),
            transform: [{
              translateX: position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [-50, 0, 50],
              }),
            }]
          };
        },
      }),
    
    }
)


export default createAppContainer(Routing);