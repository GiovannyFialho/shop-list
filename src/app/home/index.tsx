import { Image, View } from "react-native";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

import { styles } from "@/app/home/styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}
