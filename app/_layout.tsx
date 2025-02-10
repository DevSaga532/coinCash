import { StatusBar } from "expo-status-bar";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { tokenCache } from "@/cache/secure-store";
import { InitialLayout } from "@/components/InitialLayout";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    RubikBold: require("../assets/fonts/Rubik-Bold.ttf"),
    RubikExtraBold: require("../assets/fonts/Rubik-ExtraBold.ttf"),
    RubikLight: require("../assets/fonts/Rubik-Light.ttf"),
    RubikMedium: require("../assets/fonts/Rubik-Medium.ttf"),
    RubikRegular: require("../assets/fonts/Rubik-Regular.ttf"),
    RubikSemiBold: require("../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
  if (!publishableKey) {
    throw new Error("Missing publishable key");
  }
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <InitialLayout />
        <StatusBar style="auto" />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
