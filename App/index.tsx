import { Link } from "expo-router";
import {
  Text,
  View,
  useWindowDimensions,
  Platform,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pokemonData, pokemonSections } from "../constants/pokemonData";
import { PokemonCard } from "../components/PokemonCard";

export default function HomePage() {
  return (
    <SafeAreaView className="p-4 pb-12">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mb-4 self-center space-x-7"
      >
        <Link
          href="/(tabs)"
          className="text-white mr-2 bg-blue-500 rounded-md px-4 py-3 "
        >
          Tabs
        </Link>
        <Link
          href="/(drawer)"
          className="text-white mr-2 bg-blue-500 rounded-md px-4 py-3 "
        >
          Drawer
        </Link>
        <Link
          href="/form"
          className="text-white mr-2 bg-blue-500 rounded-md px-4 py-3 "
        >
          Go to About Page
        </Link>
        <Link
          href="/login"
          className="text-white mr-2 bg-blue-500 rounded-md px-4 py-3 "
        >
          Login
        </Link>
        <Link
          href="/users"
          className="text-white bg-blue-500 rounded-md px-4 py-3 "
        >
          Users
        </Link>
      </ScrollView>

      {/* <FlatList
        data={pokemonData}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ gap: 16 }}
        ListHeaderComponent={
          <Text className="text-lg text-center font-bold">Pokemon List</Text>
        }
        ListEmptyComponent={<Text>No Data Available</Text>}
        ListFooterComponent={
          <Text className="text-center font-bold text-lg">End of List</Text>
        }
      /> */}

      <SectionList
        sections={pokemonSections}
        renderItem={({ item }) => <PokemonCard {...item} />}
        keyExtractor={(item) => item.name}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-3xl p-4 font-bold">{title}</Text>
        )}
        stickySectionHeadersEnabled
        contentContainerStyle={{ gap: 12 }}
        SectionSeparatorComponent={() => <View className="h-4" />}
      />
    </SafeAreaView>
  );
}
