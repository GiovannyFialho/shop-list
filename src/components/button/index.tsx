import { Text, TouchableOpacity } from "react-native";

import { styles } from "@/components/button/styles";

type ButtonProps = {
  title: string;
};

export function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
