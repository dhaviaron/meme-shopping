import React, { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
import * as Font from "expo-font";

import colors from "./assets/colors/colors";
import AppStack from "./routes/AppStack";
// import { Root } from "native-base";r
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "ObjectSans-Regular": require("./assets/fonts/ObjectSans-Regular.ttf"),
      "ObjectSans-Bold": require("./assets/fonts/ObjectSans-Bold.ttf"),
      "ObjectSans-Heavy": require("./assets/fonts/ObjectSans-Bold.ttf"),
    });

    setLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return loaded ? (
    <SafeAreaProvider>
      <AppStack />

      <StatusBar backgroundColor={colors.primary} />
    </SafeAreaProvider>
  ) : null;
};

export default App;
