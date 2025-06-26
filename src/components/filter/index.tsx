import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { FilterStatus } from "@/@types/filter-status";

import { styles } from "@/components/filter/styles";

type FilterProps = {
  status: FilterStatus;
  isActive: boolean;
} & TouchableOpacityProps;

export function Filter({ status, isActive, ...rest }: FilterProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, { opacity: isActive ? 1 : 0.5 }]}
      {...rest}
    >
      <Text style={styles.title}>
        {status === "done" ? "Comprados" : "Pendentes"}
      </Text>
    </TouchableOpacity>
  );
}
