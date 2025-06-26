import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { styles } from "@/components/button/styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
