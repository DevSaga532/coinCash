import { StyleSheet } from 'react-native';
import { Colors } from './colors';


export const globalStyles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 16, // Espaciado interno
  },
  // Texto principal
  header: {
    fontSize: 36, // Tamaño del encabezado principal
    fontWeight: '700', // Texto en negrita
    color: Colors.primary, // Color principal
  },
  // Subtítulos
  subHeader: {
    fontSize: 24, // Tamaño para subtítulos
    fontWeight: '500', // Texto semi-negrita
    color: Colors.secondary, // Color secundario
  },
  // Texto de descripción
  descriptionText: {
    fontSize: 16, // Tamaño mediano
    color: Colors.gray, // Color gris
    lineHeight: 24, // Altura de línea para mejorar la legibilidad
    marginTop: 10, // Espacio superior
  },
  // Estilo para botones
  button: {
    paddingVertical: 12, // Espaciado vertical interno
    paddingHorizontal: 24, // Espaciado horizontal interno
    borderRadius: 30, // Borde redondeado
    backgroundColor: Colors.primary, // Fondo del botón
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Texto en botones
  buttonText: {
    fontSize: 18, // Tamaño de texto en botones
    fontWeight: '600', // Texto semi-negrita
    color: '#fff', // Texto blanco
  },
  // Enlaces de texto
  textLink: {
    fontSize: 16, // Tamaño de texto en enlaces
    color: Colors.primary, // Color del enlace
    textDecorationLine: 'underline', // Subrayado
  },
  // Estilo para pequeños bloques de texto
  smallText: {
    fontSize: 12,
    color: Colors.gray,
  },
});
