import { SplashScreen, Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { persistor, store } from "@/redux/store";
import { ActivityIndicator } from "react-native";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Black": require("../assets/fonts//Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Black.ttf"),
    "inter-Bold": require("../assets/fonts/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Bold.ttf"),
    "Inter-Light": require("../assets/fonts/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Light.ttf"),
    "Inter-Medium": require("../assets/fonts/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Medium.ttf"),
    "Inter-Regular": require("../assets/fonts/Basis Grotesque PRO Font Family/BasisGrotesqueArabicPro-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)/onboarding" />
        </Stack>
      </PersistGate>
    </Provider>
  );
}
