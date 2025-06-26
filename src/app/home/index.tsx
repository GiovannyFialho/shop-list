import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

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

export function Home() {
  const filter_status: FilterStatus[] = ["done", "pending"];
  const items: ItemsProps[] = [
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
  ];

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
