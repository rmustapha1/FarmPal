import { SafeAreaProvider } from "react-native-safe-area-context";
import RootStack from "./navigators/RootStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <RootStack />
    </SafeAreaProvider>
  );
}
