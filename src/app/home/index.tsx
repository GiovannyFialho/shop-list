import { Image, View } from "react-native";

import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
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

      <View style={styles.content}>
        <Filter status="done" isActive />
        <Filter status="pending" isActive={false} />
      </View>
    </View>
  );
}
