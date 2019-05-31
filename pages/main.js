
import React from 'react';
import { View, Text ,Button,TouchableOpacity,InteractionManager} from 'react-native';

class Main  extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Main Screen </Text>
          <Button
          title="Go to SignIn"
          onPress={() => {
            this.props.navigation.navigate('SignIn');
          }}
        />  
         <Button
        title="Go to SignUp"
        onPress={() => {
          this.props.navigation.navigate('SignUp');

        }}
      />
        </View>
      );
    }
  }
  

  export default Main;