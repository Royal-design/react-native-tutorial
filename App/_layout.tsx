import { Stack } from "expo-router";
import "../global.css";
import { Alert, Pressable, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView className="flex-1">
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",

          headerRight: () => (
            <Pressable
              onPress={() =>
                Alert.alert(
                  "Hello",
                  "Choose an option",
                  [{ style: "cancel", text: "Cancel" }, { text: "Ok" }],
                  { cancelable: true }
                )
              }
            >
              <Text>Menu</Text>
            </Pressable>
          ),
        }}
      >
        {children}
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
