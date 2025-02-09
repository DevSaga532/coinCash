import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, TouchableOpacity, Image } from "react-native";

import * as Linking from "expo-linking";
import { useOAuth } from "@clerk/clerk-expo";
import icons from "@/constants/icons";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSign() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, []);

  return (
    <TouchableOpacity
      className="bg-white shadow-zinc-300 shadow-md rounded-full w-full py-4 mt-5"
      onPress={onPress}
    >
      {/* Component  ae img source, alt, className, resizeMode, style */}
      <View className="flex flex-row items-center justify-center">
        <Image
          source={icons.google}
          alt="google"
          className="w-5 h-5"
          resizeMode="contain"
        />
        <Text className="text-lg font-rubik text-black-300 ml-2">
          Login With Google
        </Text>
      </View>
    </TouchableOpacity>
  );
}
