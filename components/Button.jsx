import { Button, Pressable, StyleSheet, Text } from 'react-native';
import colors from '../styles/colors';
import spacings from '../styles/spacings';

const styles = StyleSheet.create({
  btn: {
    borderRadius: 5,
    backgroundColor: colors.primaryBlue,
    paddingRight: spacings.medium,
    paddingLeft: spacings.medium,
    paddingBottom: spacings.tiny,
    paddingTop: spacings.tiny,
    marginTop: spacings.mediumLarge,
  },
  text: {
    color: '#fff',
  },
});

export default function MyButton(props) {
  return (
    <Pressable style={styles.btn}>
      <Text style={styles.text}>{props.label}</Text>
    </Pressable>
  );
}
