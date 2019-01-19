import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Form from './components/ui/Form';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form.TextField
          label="Name"
          onChangeText={(text) => console.log(text)}
          // success={true}
          error={"Name is required."}
        ></Form.TextField>
        <Form.TextField
          label="E-Mail"
          onChangeText={(text) => console.log(text)}
          success={true}
        ></Form.TextField>
        <Form.TextField
          label="Password"
          onChangeText={(text) => console.log(text)}
        ></Form.TextField>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
