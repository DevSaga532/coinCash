import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as Linking from "expo-linking";

import icons from "@/constants/icons";
import { useOAuth } from "@clerk/clerk-expo";
import { Colors } from "@/constants/colors";

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
    <TouchableOpacity activeOpacity={0.8} style={styles.touchable} onPress={onPress}>
      <View style={styles.viewContainer}>
        <Image
          source={icons.facebook} // Reemplazado con el ícono de Facebook
          alt="facebook"
          style={styles.facebookIcon}
          resizeMode="contain"
        />
       
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: Colors.gray, // Fondo blanco
    shadowColor: "#D1D5DB", // Sombra (gris claro)
    shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
    shadowOpacity: 0.25, // Opacidad de la sombra
    shadowRadius: 3.84, // Radio de la sombra
    elevation: 5, // Sombra en Android
    borderRadius: 100, // Bordes redondeados
    width: "14%", // Ocupa todo el ancho disponible
    paddingVertical: 9,
    marginTop: 20, // Espaciado superior
  },
  viewContainer: {
    flexDirection: "row", // Alinear contenido en fila
    alignItems: "center", // Centrar verticalmente
    justifyContent: "center", // Centrar horizontalmente
  },
  facebookIcon: {
    width: 30, // Ancho del ícono
    height: 30, // Altura del ícono
  },
  text: {
    fontSize: 16, // Tamaño de fuente
    fontFamily: "Rubik", // Fuente personalizada
    color: "white", // Color del texto (gris oscuro)
    marginLeft: 8, // Espaciado entre ícono y texto
  },
});
