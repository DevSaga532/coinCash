import React, { useState, useEffect } from "react";
import { Colors, Fonts, FontSize } from "@/constants/colors";
import { useUser } from "@clerk/clerk-expo";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const { user } = useUser();
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true); // Estado para la carga inicial

  useEffect(() => {
    // Simula la carga inicial (puedes reemplazar con lógica real)
    const loadContent = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loadContent); // Limpieza del timeout
  }, []);

  // Función para manejar la acción de refrescar
  const onRefresh = async () => {
    setRefreshing(true);
    // Simulando carga (puedes agregar lógica para recargar datos)
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  if (loading) {
    // Muestra un spinner mientras se carga el contenido
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom", "left", "right"]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.primary]} // Color del spinner en Android
            tintColor={Colors.primary} // Color del spinner en iOS
          />
        }
      >
        <View style={styles.avatarContainer}>
          <Image
            accessibilityLabel="User Avatar"
            resizeMode="contain"
            source={{ uri: user?.imageUrl }}
            style={styles.avatar}
          />
          <Text style={styles.text}>
            {`${user?.firstName} ${user?.lastName}`}
          </Text>
        </View>

        {refreshing && (
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>
        )}
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 20,
    gap: 5,
    marginTop: 60,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  text: {
    color: Colors.gray,
    textAlign: "center",
    fontSize: FontSize.medium,
    fontFamily: Fonts.RubikMedium,
  },
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
