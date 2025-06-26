import { TextInput, type TextInputProps } from "react-native";

import { styles } from "@/components/input/styles";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#74798b"
      style={styles.container}
      {...rest}
    />
  );
}
