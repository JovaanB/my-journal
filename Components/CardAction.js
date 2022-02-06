import * as React from "react";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import CustomIcon from "./CustomIcon";

const CardAction = (props) => {
  const { colors } = useTheme();
  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? "calendar-today" : "plus"}
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
          onStateChange={onStateChange}
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

export default CardAction;
