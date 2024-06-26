import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import colors from '../styles/colors';
import spacings from '../styles/spacings';
import Button from '../components/Button';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 32,
  },
  tinyText: {
    color: colors.primaryBlue,
    textAlign: 'right',
    width: '100%',
    marginTop: spacings.tinyMedium,
  },
});

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Input
        placeholder="fulano@email.com"
        isPasswordInput={false}
        inputSpacing={true}
      />
      <Input placeholder="******" isPasswordInput={true} inputSpacing={false} />
      {/*<Text style={styles.tinyText}>Esqueci minha senha.</Text>*/}
      <Button label="Entrar" />
    </View>
  );
}
