import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="index"
          options={{
            tabBarStyle: styles.bgTabbar,
            title: "Home",
          }}
        />
        <Tabs.Screen name="porfolio" />
        <Tabs.Screen name="setting" />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  bgTabbar: {
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
});
