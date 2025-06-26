import { CircleCheck, CircleDashed } from "lucide-react-native";

import { FilterStatus } from "@/@types/filter-status";

type StatusIconProps = {
  status: FilterStatus;
};

export function StatusIcon({ status }: StatusIconProps) {
  return status === "done" ? (
    <CircleCheck size={18} color="#2c46b1" />
  ) : (
    <CircleDashed size={18} color="#000" />
  );
}
