import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Input = (props) => {
  const {success, inValid, ...otherProps} = props;

  const localStyle = [styles.input];

  if (inValid) {
    localStyle.push({ borderColor: '#ff1400' });
  }

  return (
    <View>
      <TextInput style={localStyle} {...otherProps} />
      {success && <Ionicons style={styles.icon} name="md-checkmark-circle" size={20} color="green" />}
      {inValid && <Ionicons style={styles.icon} name="md-close-circle" size={20} color="red" />}
    </View>)
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 14,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
    color: '#000',
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  icon: {
    position: 'absolute',
    top: 8,
    right: 10,
  }
});

export default Input;