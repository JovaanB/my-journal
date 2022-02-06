import React from "react";
import { StyleSheet } from "react-native";
import { Menu, Divider } from "react-native-paper";
import CustomFAB from "./FAB";

const ActionsMenu = () => {
  const [visible, setVisible] = React.useState(false);

  const closeMenu = () => setVisible(false);

  return (
    <Menu
      style={styles.actionsMenu}
      visible={visible}
      onDismiss={closeMenu}
      anchor={<CustomFAB visible={visible} setVisible={setVisible} />}
    >
      <Menu.Item onPress={() => {}} title="Item 1" />
      <Menu.Item onPress={() => {}} title="Item 2" />
      <Divider />
      <Menu.Item onPress={() => {}} title="Item 3" />
    </Menu>
  );
};

const styles = StyleSheet.create({
  actionsMenu: {
    // position: "absolute",
    // margin: 16,
    // right: 0,
    // top: 200,
  },
});

export default ActionsMenu;
