import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabBar from "@/components/ui/TabBar";

const TabsLayout = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Tabs screenOptions={{ headerShown: false, title: "" }} tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="index" />
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
