/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

interface CookieHook {
  value: any;
  setValue: SetValue<any>;
  removeValue: () => void;
}

export const useCookie = <T>(
  key: string,
  initialValue?: T
): CookieHook => {
  const [storedValue, setStoredValue] = useState<T | undefined>(initialValue)

  useEffect(() => {
    const initial = Cookies.get(key)
    if (initial) {
      setStoredValue(initial as T)
    }
  }, [])

  const setValue: SetValue<T> = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue as T) : value
      setStoredValue(valueToStore)
      Cookies.set(key, valueToStore as string)
    } catch (error) {
      console.error(`Error on save in cookie: ${error}`)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(undefined)
      Cookies.remove(key)
    } catch (error) {
      console.error(`Error on delete from cookie: ${error}`)
    }
  }

  return { value: storedValue, setValue, removeValue }
}
