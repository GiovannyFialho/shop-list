import { useEffect, useState } from "react";
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

import { itemsStorage, type ItemStorageProps } from "@/storage/items-storage";

import { Button } from "@/components/button";
import { Filter } from "@/components/filter";
import { Input } from "@/components/input";
import { Item } from "@/components/item";

import { styles } from "@/app/home/styles";

const filter_status: FilterStatus[] = ["done", "pending"];

export function Home() {
  const [filter, setFilter] = useState<FilterStatus>("pending");
  const [description, setDescription] = useState("");

  const [items, setItems] = useState<ItemStorageProps[]>([]);

  async function handleAdd() {
    if (!description.trim()) {
      Alert.alert("Adicionar", "Informe a descrição para adicionar");
    }

    const newItem: ItemStorageProps = {
      id: Math.random().toString(36).substring(2),
      description,
      status: "pending",
    };

    await itemsStorage.add(newItem);
    await itemsByStatus();

    Alert.alert("Adicionado", `Adicionado ${description}`);

    setDescription("");
    setFilter("pending");

    Keyboard.dismiss();
  }

  async function itemsByStatus() {
    try {
      const response = await itemsStorage.getByStatus(filter);

      setItems(response);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível filtrar os itens.");
    }
  }

  async function handleToggleItemStatus(id: string) {
    try {
      await itemsStorage.toggleStatus(id);
      await itemsByStatus();
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o status");
    }
  }

  async function handleRemove(id: string) {
    try {
      await itemsStorage.remove(id);
      await itemsByStatus();
    } catch (error) {
      Alert.alert("Remover", "Não foi possível remover");
    }
  }

  function handleClear() {
    Alert.alert("Limpar", "Deseja remover todos?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => onClear() },
    ]);
  }

  async function onClear() {
    try {
      await itemsStorage.clear();

      setItems([]);
    } catch (error) {
      Alert.alert("Limpar", "Não foi possível remover todos os itens.");
    }
  }

  useEffect(() => {
    itemsByStatus();
  }, [filter]);

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

          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleToggleItemStatus(item.id)}
              onRemove={() => handleRemove(item.id)}
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
