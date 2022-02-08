import * as React from "react";
import { StyleSheet, Provider } from "react-native";
import { FAB, Portal } from "react-native-paper";

const CustomFAB = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "minus" : "plus"}
          actions={[
            { icon: "plus", onPress: () => console.log("Pressed add") },
            {
              icon: "star",
              label: "Star",
              onPress: () => console.log("Pressed star"),
            },
            {
              icon: "email",
              label: "Email",
              onPress: () => console.log("Pressed email"),
            },
            {
              icon: "bell",
              label: "Remind",
              onPress: () => console.log("Pressed notifications"),
              small: false,
            },
          ]}
          onStateChange={() => setOpen(!open)}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

const styles = ({ colors }) =>
  StyleSheet.create({
    fab: {
      position: "absolute",
      backgroundColor: colors.primary,
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });

export default CustomFAB;
