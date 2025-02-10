import { Colors } from "@/constants/colors";
import { CoinGeckoTypes } from "@/types/coinGecko";
import { Image, StyleSheet, Text, View } from "react-native";

const CoinItems = ({ coin }: { coin: CoinGeckoTypes }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.coinName}>
        <Image source={{ uri: coin.image }} style={styles.img} />
        <View style={styles.containerName}>
          <Text style={styles.text}>{coin.name}</Text>
          <Text style={styles.symbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            styles.price,
            coin.price_change_percentage_24h
              ? coin.price_change_percentage_24h > 0
                ? styles.priceChange
                : styles.priceChangeNegative
              : styles.neutralPrice,
          ]}
        >
          {coin.price_change_percentage_24h ?? "N/A"}
        </Text>
      </View>
    </View>
  );
};

export default CoinItems;
const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  coinName: {
    flexDirection: "row",
    alignItems: "center",
  },
  containerName: {
    marginLeft: 10,
  },
  text: {
    color: Colors.title,
    fontSize: 18,
    fontWeight: "bold",
  },
  symbol: {
    color: Colors.primary,
    fontSize: 14,
    textTransform: "uppercase",
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  textPrice: {
    color: "#fff",
    textAlign: "right",
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    textAlign: "right",
    fontSize: 14,
  },
  priceChange: {
    color: "green",
    fontWeight: "bold",
  },
  priceChangeNegative: {
    color: "red",
    fontWeight: "bold",
  },
  neutralPrice: {
    color: Colors.gray,
  },
});
