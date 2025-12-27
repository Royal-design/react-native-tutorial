import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      const data: User[] = await response.json();
      setUsers(data);

      Toast.show({
        type: "success",
        text1: "Users loaded",
        position: "top",
        visibilityTime: 2000,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
      Toast.show({
        type: "error",
        text1:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        position: "top",
        visibilityTime: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchUsers();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#1e1eb7" />
        <Text className="mt-2">Loading...</Text>
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: { item: User }) => (
    <View className="p-4 border-b border-gray-300">
      <Text className="text-lg font-bold">{item.name}</Text>
      <Text className="text-gray-500">{item.email}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Users List</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No users found.</Text>}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}
