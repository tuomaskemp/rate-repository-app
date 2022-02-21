import { Pressable as NativePressable, StyleSheet } from 'react-native';

import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.primary,
    padding: 13,
    marginHorizontal: 12,
    borderRadius: theme.borders.radius,
    textAlign: "center"
  },
  colorError: {
    backgroundColor: theme.colors.error,
  },
  text: {
      textAlign: 'center',
  }
});

const Pressable = ({ color, style, onSubmit, text, ...props }) => {
  const pressableStyle = [
    styles.btn,
    color === 'error' && styles.colorError,
    style,
  ];

  return (
    <NativePressable style={pressableStyle} onPress={onSubmit} {...props}>
        <Text color="textWhite" fontWeight="bold" style={styles.text}>{text}</Text>
    </NativePressable>
  );
};

export default Pressable;