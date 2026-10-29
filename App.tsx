import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/CategoryButton';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Header />

      <SearchBar />

      <View style={styles.containerCategory}>
        <CategoryButton title='Todos' selected={true} />
        <CategoryButton title='Ação' selected={false} />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d14',
    paddingTop: 40
  },
  containerCategory: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    gap: 10
  }
});
