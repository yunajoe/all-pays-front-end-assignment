"use client";
import { useEffect, useRef, useState } from "react";

function useDebounce(value: string, time: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  const [debounceValueLoading, setDebounceValueLoading] = useState(false);

  const timeId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startId = setTimeout(() => {
      setDebounceValueLoading(true);
    }, 0);
    // setTimeout 함수 안 = 입력이 멈춘 뒤 time(ms)이 지난 시점
    timeId.current = setTimeout(() => {
      setDebounceValue(value);
      setDebounceValueLoading(false);
    }, time);
    return () => {
      if (startId) {
        clearTimeout(startId);
      }
      if (timeId.current) {
        clearTimeout(timeId?.current);
      }
    };
  }, [value, time]);

  return {
    debounceValue,
    debounceValueLoading,
  };
}

export default useDebounce;
