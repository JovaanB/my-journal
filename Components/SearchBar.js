import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <Searchbar placeholder="Recherche" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 8,
  },
});

export default SearchBar;
