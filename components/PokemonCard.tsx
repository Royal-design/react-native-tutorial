import React, { memo } from "react";
import { Image, Text, View } from "react-native";

const getTypeDetails = (type: string) => {
  switch (type) {
    case "fire":
      return { color: "red", icon: "🔥" };
    case "water":
      return { color: "blue", icon: "💧" };
    case "grass":
      return { color: "green", icon: "🍃" };
    case "electric":
      return { color: "orange", icon: "⚡" };
    case "fairy":
      return { color: "pink", icon: "🧚‍♀️" };
    case "normal":
      return { color: "gray", icon: "⭐" };

    default:
      return { color: "gray", icon: "❓" };
  }
};
interface PokemonCardProps {
  name: string;
  image: string;
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];
}

export const PokemonCard: React.FC<PokemonCardProps> = React.memo(
  ({ name, image, type, hp, moves, weakness }) => {
    const { color, icon } = getTypeDetails(type);
    return (
      <View className="bg-white p-6 border-2 rounded-3xl shadow-md">
        <View className="flex-row items-center justify-between">
          <Text className="text-4xl font-bold">{name}</Text>
          <Text className="text-xl font-bold">❤️{hp}</Text>
        </View>
        <Image
          source={{ uri: image }}
          accessibilityLabel={name}
          resizeMode="cover"
          className="w-full h-72"
        />
        <Text
          className="text-xl font-bold mb-4 rounded-full px-4 py-1 border-2 self-center"
          style={{ color, borderColor: color }}
        >
          {icon} {type}
        </Text>
        <Text className="text-2xl font-bold">Moves: {moves?.join(", ")}</Text>
        <Text className="text-2xl font-bold">
          Weaknesses: {weakness?.join(", ")}
        </Text>
      </View>
    );
  }
);
