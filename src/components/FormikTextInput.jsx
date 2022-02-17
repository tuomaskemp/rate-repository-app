import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 10,
    marginLeft: 12,
    color: theme.colors.error,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: theme.borders.width,
    borderRadius: theme.borders.radius,
  },
  defaultInput: {
    borderColor: theme.colors.formBorder,
  },
  errorInput: {
    borderColor: theme.colors.error,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, 
            showError ? styles.errorInput : styles.defaultInput]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;