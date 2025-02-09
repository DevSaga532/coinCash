import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const App = () => {
  return (
    <ThemedView lightColor="#fff" darkColor="rgba(255,255,255,0.1)">
      <ThemedText type="title"> Hello Cash Coin</ThemedText>
    </ThemedView>
  );
};
export default App;
