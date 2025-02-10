import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import GoogleSign from "@/components/GoogleSign";
import FacebookSign from "@/components/FacebookSign";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Fonts, FontSize } from "@/constants/colors";
import images from "@/constants/images";

const SignIn = () => {
  const { width, height } = useWindowDimensions();

  // Ajuste dinámico según el tamaño de pantalla
  const isTablet = width >= 600 && width < 1024;
  const isPC = width >= 1024;

  return (
    <SafeAreaView edges={["bottom", "left", "right"]} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        fadingEdgeLength={50} // Efecto de desvanecimiento
      >
        <Image
          style={[
            styles.img,
            isTablet && styles.imgTablet,
            isPC && styles.imgPC,
          ]}
          resizeMode="contain"
          source={images.onboarding}
          accessibilityLabel="Onboarding Image"
        />
        <View style={styles.content}>
          <Text
            style={[
              styles.textPrimary,
              isTablet && styles.textPrimaryTablet,
              isPC && styles.textPrimaryPC,
            ]}
          >
            Welcome to the Digital Wallet for Ambitious Investors and Beginners
          </Text>
          <Text
            style={[
              styles.textSecondary,
              isTablet && styles.textSecondaryTablet,
              isPC && styles.textSecondaryPC,
            ]}
          >
            Start your journey to financial success {"\n"}with CoinCash today!
          </Text>
        </View>
        <View
          style={[
            styles.socialBtn,
            isTablet && styles.socialBtnTablet,
            isPC && styles.socialBtnPC,
          ]}
        >
          <GoogleSign />
          <FacebookSign />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  img: {
    width: "80%",
    height: 300,
    alignSelf: "center",
    marginBottom: 20,
  },
  imgTablet: {
    width: "70%",
    height: 400,
  },
  imgPC: {
    width: "50%",
    height: 500,
  },
  content: {
    backgroundColor: Colors.background,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textPrimary: {
    fontFamily: Fonts.RubikBold,
    fontSize: FontSize.large,
    color: Colors.title,
    textAlign: "center",
    marginBottom: 10,
  },
  textPrimaryTablet: {
    fontSize: FontSize.extraLarge,
  },
  textPrimaryPC: {
    fontSize: FontSize.small,
  },
  textSecondary: {
    fontFamily: Fonts.RubikRegular,
    fontSize: FontSize.medium,
    color: Colors.gray,
    textAlign: "center",
  },
  textSecondaryTablet: {
    fontSize: FontSize.large,
  },
  textSecondaryPC: {
    fontSize: FontSize.extraLarge,
  },
  socialBtn: {
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  socialBtnTablet: {
    paddingHorizontal: 40,
  },
  socialBtnPC: {
    paddingHorizontal: 60,
  },
});
