import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, TouchableOpacity, Image } from "react-native";
import * as Linking from "expo-linking";

import icons from "@/constants/icons";
import { useOAuth } from "@clerk/clerk-expo";

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function FacebookSign() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_facebook" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Manejar signIn o signUp si es necesario
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
      <View className="flex flex-row items-center justify-center">
        <Image
          source={icons.chat} // Asegúrate de que este ícono existe en tu archivo icons.js/ts
          alt="facebook"
          className="w-5 h-5"
          resizeMode="contain"
        />
        <Text className="text-lg font-rubik text-black-300 ml-2">
          Login With Facebook
        </Text>
      </View>
    </TouchableOpacity>
  );
}
