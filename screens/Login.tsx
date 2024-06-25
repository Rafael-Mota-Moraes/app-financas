import { StyleSheet, View } from 'react-native';
import Input from '../components/Input';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 32,
    paddingRight: 32,
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
    </View>
  );
}
