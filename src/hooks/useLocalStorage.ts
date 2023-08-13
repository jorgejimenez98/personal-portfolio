/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

interface LocalStorageHook {
  value: any,
  setValue: SetValue<any>,
  removeValue: () => void
}

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): LocalStorageHook => {
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined)

  useEffect(() => {
    const initial = localStorage.getItem(key) as T
    setStoredValue(initial ? initial: initialValue)
  }, [])

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue as T) : value
      setStoredValue(valueToStore)
      localStorage.setItem(key, valueToStore as string)
    } catch (error) {
      console.error(`Error on save at localStorage: ${error}`)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(undefined)
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error on delete from localStorage: ${error}`)
    }
  }

  return { value: storedValue, setValue, removeValue }
}

export default useLocalStorage
