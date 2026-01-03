import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductPage() {
  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text>My Products</Text>
      <Link
        href="/products/1"
        className="rounded-md px-4 py-2 bg-blue-500 text-white"
      >
        Product 1
      </Link>
      <Link
        href="/products/best/playstation/5"
        className="rounded-md px-4 py-2 bg-blue-500 text-white"
      >
        Best Seller
      </Link>
      <Link
        href="/products/deal"
        className="rounded-md px-4 py-2 bg-blue-500 text-white"
      >
        Best Seller
      </Link>
    </View>
  );
}
