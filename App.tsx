//import liraries
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secand}>
        <Text style={styles.text}>Sign Up</Text>
        <TextInput
          style={styles.inputbox}
          placeholder="Name"
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="default"
          multiline={false}
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Email"
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="default"
          multiline={false}
        />
        <TextInput
          style={styles.inputbox}
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="words"
          keyboardType="default"
          multiline={false}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.cen}>sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: '400',
  },
  secand: {
    height: '50%',
    width: '85%',
  },
  inputbox: {
    color: 'red',
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    marginTop: 20,
    padding: 5,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 7,
    padding: 12,
    marginTop: 20,
    textAlign: 'center',
  },
  cen: {
    textAlign: 'center',
    color: 'yellow',
    fontSize: 15,
    fontWeight: '600',
  },
});

//make this component available to the app
export default App;
