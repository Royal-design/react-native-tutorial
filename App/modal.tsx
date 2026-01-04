import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text>This is a new modal!</Text>
      <Pressable
        onPress={() => router.back()}
        style={{ marginTop: 16, padding: 8, backgroundColor: "blue" }}
      >
        <Text style={{ color: "white" }}>Close</Text>
      </Pressable>
    </View>
  );
}
