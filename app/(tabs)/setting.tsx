import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Image, Text, View, TouchableOpacity } from "react-native";

const Setting= () => {
  const { user } = useUser();
  const { signOut } = useAuth(); // 👈 Hook para cerrar sesión
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Image
          source={{ uri: user?.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 50 }}
        />
        <Text>{user?.firstName}</Text>
        <Text>{user?.lastName}</Text>

        {/* Botón para cerrar sesión */}
        <TouchableOpacity
          onPress={signOut as any} // 👈 Llama a signOut cuando se presiona
          style={{
            marginTop: 20,
            padding: 10,
            backgroundColor: "red",
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Cerrar sesión</Text>
        </TouchableOpacity>
      </SignedIn>

      <SignedOut>
        <Link href="/(auth)/sigin-in">
          <Text style={{ color: "blue" }}>Sign in</Text>
        </Link>
      </SignedOut>
    </View>
  )
}

export default Setting