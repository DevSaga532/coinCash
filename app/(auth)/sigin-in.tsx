import { StyleSheet, Text, View } from "react-native";
import React from "react";
import GoogleSign from "@/components/GoogleSign";
import FacebookSign from "@/components/FacebookSign";

const SignIn = () => {
  return (
    <View>
      <GoogleSign />
      <FacebookSign />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
