import AsyncStorage from "@react-native-async-storage/async-storage";

import { FilterStatus } from "@/@types/filter-status";

export type ItemStorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

const ITEMS_STORAGE_KEY = "@shop:items";

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error(`GET_ITEMS: ${error}`);
  }
}

export const itemsStorage = {
  get,
};
