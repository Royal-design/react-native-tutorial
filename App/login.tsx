import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { loginSchema, type LoginType } from "../schemas/loginSchema";

export default function LoginPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data: LoginType) => {
    console.log("Login Data:", data);
  };
  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="flex-1 justify-center items-center p-2"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="bg-white w-full border border-gray-200 rounded-xl shadow-md p-6">
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            }}
            className="rounded-full w-36 h-36 border border-gray-200 mb-2 shadow-lg self-center bg-white"
            accessibilityLabel="Logo"
            resizeMode="cover"
          />
          <Text className="text-3xl font-bold text-center mb-6">
            Welcome Back!
          </Text>

          {/* Username */}
          <View className="mb-4">
            <Text className="text-lg font-medium mb-2">Username</Text>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your username"
                  className="border border-gray-300 rounded-md px-4 py-3"
                />
              )}
            />
            {errors.username && (
              <Text className="text-red-500 mt-1">
                {errors.username.message}
              </Text>
            )}
          </View>

          {/* Password */}
          <View className="mb-6">
            <Text className="text-lg font-medium mb-2">Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your password"
                  secureTextEntry
                  className="border border-gray-300 rounded-md px-4 py-3"
                />
              )}
            />
            {errors.password && (
              <Text className="text-red-500 mt-1">
                {errors.password.message}
              </Text>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-blue-600 rounded-md py-3"
            onPress={handleSubmit(onSubmit)}
          >
            <Text className="text-white text-center font-bold text-lg">
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
