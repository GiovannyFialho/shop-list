import { Image, Text, TouchableOpacity, View } from "react-native";

import { FilterStatus } from "@/@types/filter-status";

import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/input";

import { styles } from "@/app/home/styles";

export function Home() {
  const filter_status: FilterStatus[] = ["done", "pending"];

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Adicionar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {filter_status.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
