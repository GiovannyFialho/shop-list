import { Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { FilterStatus } from "@/@types/filter-status";

import { StatusIcon } from "@/components/status-icon";

import { styles } from "@/components/item/styles";

type ItemDataProps = {
  status: FilterStatus;
  description: string;
};

type ItemProps = {
  data: ItemDataProps;
  onRemove: () => void;
  onStatus: () => void;
};

export function Item({ data, onStatus, onRemove }: ItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onStatus}>
        <StatusIcon status={data.status} />
      </TouchableOpacity>

      <Text style={styles.description}>{data.description}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash2 size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}
