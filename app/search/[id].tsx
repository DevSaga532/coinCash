import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { id, user, extra } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Search {id}</Text>
      <Text>User: {user}</Text>
      <Text>Extra: {extra} </Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
