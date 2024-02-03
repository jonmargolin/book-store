/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-nocheck
import { useEffect, useRef } from "react";

const useDebounce = (
  callback: { (): void; (arg0: any): void },
  delay: number | undefined,
) => {
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    // Cleanup the previous timeout on re-render
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
export default useDebounce;
