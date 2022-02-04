import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const TopBar = () => (
  <Appbar.Header style={styles.topBar}>
    {/* <Appbar.BackAction /> */}
    <Appbar.Content title="MON JOURNAL" subtitle="Musculation" />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  topBar: {
    margin: 10,
    height: 50,
  },
});

export default TopBar;
