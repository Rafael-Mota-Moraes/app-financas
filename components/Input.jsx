import { StyleSheet, Text, TextInput } from 'react-native';
import spacings from '../styles/spacings';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  input: {
    borderColor: colors.primaryGreen,
    borderWidth: 2,
    borderStyle: 'solid',
    padding: spacings.tinyMedium,
    marginLeft: spacings.medium,
    marginRight: spacings.medium,
    marginBottom: 32,
    borderRadius: 5,
    backgroundColor: '#fff',
    // Box shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    width: '100%',
  },
});

export default function Input(props) {
  let dynamicStyle = {};

  if (props.inputSpacing) {
    dynamicStyle.marginBottom = 32;
  } else {
    dynamicStyle.marginBottom = 0;
  }

  const combinedStyle = StyleSheet.flatten([styles.input, dynamicStyle]);

  return (
    <TextInput
      style={combinedStyle}
      placeholder={props.placeholder}
      secureTextEntry={props.isPasswordInput}
    />
  );
}
