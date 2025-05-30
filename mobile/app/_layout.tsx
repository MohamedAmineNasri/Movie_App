import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar, LogBox } from "react-native";
import { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import * as SystemUI from "expo-system-ui";

LogBox.ignoreLogs([
  "setBackgroundColorAsync is only available on Android",
  "setButtonStyleAsync is only available on Android",
]);
export default function RootLayout() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#1A1A2E");
    NavigationBar.setButtonStyleAsync("light");

    SystemUI.setBackgroundColorAsync("#1A1A2E");
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
