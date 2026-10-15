import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d14',
    paddingTop: 40
  },
});
