import { Image, View } from "react-native";

import { styles } from "@/app/home/styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
    </View>
  );
}
