"use client";

import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import clsx from "clsx";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button 
        onClick={() => setTheme('dark')}
        className={clsx(
          "py-2 px-4 rounded-l-xl border-2 text-white transition-all duration-200",
          theme === 'dark' 
            ? "border-white bg-gray-700" 
            : "border-[#d3d7dd] bg-gray-700/60",
          "hover:border-gray-300"
        )}
      >
        <FiMoon className={theme === 'dark' ? "border-white border-2" : "border-2 border-black"} />
      </button>
      <button 
        onClick={() => setTheme('light')}
        className={clsx(
          "py-2 px-4 rounded-r-xl border-2 text-white transition-all duration-200",
          theme === 'light' 
            ? "border-white bg-gray-700" 
            : "border-[#d9dfe7] bg-gray-700/60",
          "hover:border-gray-300"
        )}
      >
        <FiSun className={theme === 'light' ? "border-white border-2" : "border-2 border-black"} />
      </button>
    </>
  );
}