import AsyncStorage from '@react-native-async-storage/async-storage';

const getItem = async (key) => {
  const value = await AsyncStorage.getItem(key);
  return JSON.parse(value);
};

const setItem = async (key, value) => {
  return await AsyncStorage.setItem(key, value);
};

const removeItem = key => {
  return AsyncStorage.removeItem(key);
};

const getAllKeys = () => {
  return AsyncStorage.getAllKeys();
};

const removeAll = () => {
  return AsyncStorage.clear();
};

const multiRemove = (items) => {
  return AsyncStorage.multiRemove(items);
}

export default {
  getItem,
  setItem,
  removeItem,
  getAllKeys,
  removeAll,
  multiRemove
};
