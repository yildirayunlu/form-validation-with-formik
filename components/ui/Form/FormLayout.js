import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

import Input from './Input';

const FormLayout = (props) => {
  const { label, error, children} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 8,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    lineHeight: 16,
  },
  error: {
    top: 2,
    bottom: 0,
    color: '#ff1400',
  },
});

export default FormLayout;