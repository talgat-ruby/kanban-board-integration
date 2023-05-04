"use client";

import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./DarkLightSwitcher.module.css";
import Light from "@/components/Icons/Light";
import Dark from "@/components/Icons/Dark";

function DarkLightSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      setIsDark(
        window?.matchMedia("(prefers-color-scheme: dark)")?.matches ?? false
      );
    } catch (err) {}
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    try {
      const controller = new AbortController();
      const signal = controller.signal;

      window?.matchMedia("(prefers-color-scheme: dark)")?.addEventListener(
        "change",
        ({ matches: isDark }) => {
          setIsDark(isDark);
        },
        { signal }
      );

      return () => {
        controller?.abort();
      };
    } catch (err) {}
  }, []);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setIsDark(currentTarget.checked);
  }, []);

  return (
    <div className="h-[3rem] flex justify-center items-center rounded-md space-x-[1.5rem] bg-light-2 dark:bg-dark-2">
      <Light className="h-[1.25rem]" />
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className={styles.input}
          checked={isDark}
          onChange={handleChange}
        />
        <div className={styles.container}>
          <div className={styles.circle} />
        </div>
      </label>
      <Dark className="h-[1.25rem]" />
    </div>
  );
}

export default DarkLightSwitcher;
