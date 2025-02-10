import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Home = () => {
  const data = async () => {
    console.log("cargo");
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    data( );
  }, []);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
