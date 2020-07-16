import { useState, useEffect, Dispatch, SetStateAction } from 'react';

// permite que passe para o state qual o formato do valor passado
type Response<T> = [
   T,
   Dispatch<SetStateAction<T>>
]

function usePersistedState<T>(key: string, initalState: T): Response<T> {
   const [state, setState] = useState(() => {
      const storageValue = localStorage.getItem(key);

      if (storageValue) {
         return JSON.parse(storageValue);
      } else {
         return initalState;
      }
   });

   useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state)); // convertendo para json, uma vez que não e sabe como o valor irá chegar
   }, [key, state]);

   return [state, setState];
}

export default usePersistedState;