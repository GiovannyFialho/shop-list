import AsyncStorage from "@react-native-async-storage/async-storage";

import { FilterStatus } from "@/@types/filter-status";

export type ItemStorageProps = {
  id: string;
  status: FilterStatus;
  description: string;
};

const ITEMS_STORAGE_KEY = "@shop:items";

async function getAll(): Promise<ItemStorageProps[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error(`ITEMS_GET: ${error}`);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorageProps[]> {
  const items = await getAll();

  return items.filter((item) => item.status === status);
}

async function save(items: ItemStorageProps[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    throw new Error(`ITEMS_SAVE: ${error}`);
  }
}

async function add(newItem: ItemStorageProps): Promise<ItemStorageProps[]> {
  const items = await getAll();
  const updatedItems = [...items, newItem];

  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<void> {
  const items = await getAll();
  const updatedItems = items.filter((item) => item.id !== id);

  await save(updatedItems);
}

async function clear(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (error) {
    throw new Error(`ITEMS_CLEAR: ${error}`);
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await getAll();
  const updatedItems: ItemStorageProps[] = items.map((item) =>
    item.id === id
      ? {
          ...item,
          status: item.status === "pending" ? "done" : "pending",
        }
      : item
  );

  await save(updatedItems);
}

export const itemsStorage = {
  getAll,
  getByStatus,
  add,
  toggleStatus,
  remove,
  clear,
};
