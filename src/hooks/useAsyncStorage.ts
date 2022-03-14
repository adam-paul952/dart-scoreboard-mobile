import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAsyncStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = React.useState(initialValue);

  const getStoredItem = async (key: string, initialValue: T) => {
    try {
      const item = await AsyncStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      // console.log(error);
      return initialValue;
    }
  };

  React.useEffect(() => {
    getStoredItem(key, initialValue);
  }, [key, initialValue]);

  const setValue = async (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // console.log(error);
      throw error;
    }
  };

  return [storedValue, setValue] as const;
};

export default useAsyncStorage;
