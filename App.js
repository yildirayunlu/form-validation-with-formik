import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Form from './components/ui/Form';

const App = () => (
  <Formik 
    initialValues={{ name: '', email: '' }} 
    onSubmit={values => console.log(values)}
    validationSchema={Yup.object().shape({
      name: Yup.string().required('Name is required!'),
      email: Yup.string().required('Email is required!').email('Invalid email address!'),
    })}
  >
    {({ handleChange, touched, handleBlur, errors, handleSubmit, isValid, values }) => (
      <View style={styles.container}>
          <Form.TextField
            label="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            success={!errors.name && touched.name}
            error={errors.name && touched.name ? errors.name : undefined }
          ></Form.TextField>
          <Form.TextField
            label="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            success={!errors.email && touched.email}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email && touched.email ? errors.email : undefined }
          ></Form.TextField>
          <Button disabled={!isValid} title="Submit" onPress={handleSubmit} />
        </View>
      )
    }
  </Formik>
);

export default App;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
});
