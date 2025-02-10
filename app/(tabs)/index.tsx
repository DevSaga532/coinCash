import { url } from "@/lib/url";
import { useFetch } from "@/hooks/useFech";
import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Colors } from "@/constants/colors";
import CoinItems from "@/components/CoinItems";
import { ThemedText } from "@/components/ThemedText";
import { StatusBar } from "expo-status-bar";
import ThemedImage from "@/components/ImagenCustom";
import { useUser } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home = () => {
  const [coins, setCoins] = useState<any>([]);
  const { user } = useUser();
  const { responseJSON, isLoading, error } = useFetch(url.api);
  useEffect(() => {
    if (responseJSON) {
      setCoins(responseJSON);
    }
  }, [responseJSON]);

  const fetchMoreCoins = async () => {
    // Implementa aquí la lógica para obtener más monedas
    // Por ejemplo, podrías hacer una nueva solicitud a la API con un parámetro de página
  };
  const { top } = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="auto" />
      <LinearGradient colors={["#19282F", "#19282F"]} style={styles.gradient} />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={styles.header}>
          <ThemedImage style={styles.avatar} source={{ uri: user?.imageUrl }} />
          <ThemedText style={styles.title} type="title">
            Coins Cash
          </ThemedText>
        </View>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
          onRefresh={async () => {
            setCoins([]);
            await fetch(url.api);
            setTimeout(() => {
              setCoins(responseJSON);
            }, 2000);
          }}
          keyExtractor={(item) => item.id}
          data={coins}
          renderItem={({ item }) => <CoinItems coin={item} />}
          onEndReached={fetchMoreCoins}
          onEndReachedThreshold={0.5}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 100,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  title: {
    color: Colors.title,
    fontSize: 26,
    fontWeight: "bold",
  },
  flatList: {
    width: "100%",
    paddingHorizontal: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.gray,
    marginTop: 20,
  },
});
