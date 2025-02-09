import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments, Slot } from "expo-router";

export const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0]?.includes("tabs");

    if (isSignedIn) {
      if (!inTabsGroup) router.replace("/(tabs)");
    } else {
      router.replace("/(auth)/sigin-in");
    }
  }, [isLoaded, isSignedIn]);

  return <Slot />;
};
