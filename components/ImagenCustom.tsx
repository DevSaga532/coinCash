import React from "react";
import { Image, StyleProp } from "react-native";

interface ThemedImageProps {
  source: any;
  style?: StyleProp<any>;
  resizeMode?: "cover" | "contain" | "stretch"; // Opcional: Ajusta el tipo de redimensionado de la imagen
}

const ThemedImage = ({
  source,
  style = "",
  resizeMode = "contain",
}: ThemedImageProps) => {
  return (
    <Image
      source={source}
      style={[
        { resizeMode, borderWidth: 1 }, // Ajustes específicos de modo oscuro
        style, // Estilo adicional personalizado
      ]}
    />
  );
};

export default ThemedImage;
