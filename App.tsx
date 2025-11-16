import { NavigationContainer } from "@react-navigation/native";
import UserNavigation from "./Navigation/UserNavigation";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import HostNativeStackNavigation from "./Navigation/HostNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <GestureHandlerRootView>
        <SafeAreaProvider style={{flex: 1}}>
            <HostNativeStackNavigation/>
        </SafeAreaProvider>
       
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
