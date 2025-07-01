import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FilterStatus } from "@/@types/filter-status";

import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/input";
import { Item } from "@/components/item";

import { styles } from "@/app/home/styles";

type ItemsProps = {
  id: string;
  status: FilterStatus;
  description: string;
};

const filter_status: FilterStatus[] = ["done", "pending"];

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [description, setDescription] = useState("");

  const [items, setItems] = useState<ItemsProps[]>([
    {
      id: "1",
      status: "done",
      description: "1 pacote de café",
    },
    {
      id: "2",
      status: "pending",
      description: "3 pacotes de macarrão",
    },
    {
      id: "3",
      status: "pending",
      description: "3 cebolas",
    },
  ]);

  function handleAdd() {
    if (!description.trim()) {
      Alert.alert("Adicionar", "Informe a descrição para adicionar");
    }

    const newItem: ItemsProps = {
      id: Math.random().toString(36).substring(2),
      description,
      status: "pending",
    };

    setItems((prev) => [...prev, newItem]);
    setDescription("");

    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input
          value={description}
          placeholder="O que você precisa comprar?"
          onChangeText={setDescription}
          onSubmitEditing={handleAdd}
          returnKeyType="send"
        />

        <Button title="Adicionar" onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {filter_status.map((status) => (
            <Filter
              key={status}
              status={status}
              isActive={status === filter}
              onPress={() => setFilter(status)}
            />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("troca status")}
              onRemove={() => console.log("remover")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
