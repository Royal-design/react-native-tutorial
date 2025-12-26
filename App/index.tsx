import { Link } from "expo-router";
import {
  Text,
  View,
  useWindowDimensions,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PokemonCard } from "../components/PokemonCard";
import { data } from "./data";

export default function HomePage() {
  return (
    <SafeAreaView className="p-4">
      <ScrollView>
        <View className="gap-4">
          {data.map((pokemon, idx) => (
            <PokemonCard key={idx} {...pokemon} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
