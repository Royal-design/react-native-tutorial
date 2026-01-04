import { Stack } from "expo-router";
import { Pressable, Text } from "react-native";
import Toast from "react-native-toast-message";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white",
          headerRight: () => (
            <Pressable onPress={() => alert("Menu pressed")}>
              <Text style={{ color: "white", marginRight: 10 }}>Menu</Text>
            </Pressable>
          ),
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal", // ← this makes it behave like a modal
            headerTitle: "Modal View",
          }}
        />
      </Stack>
    </>
  );
}
