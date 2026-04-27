"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcherBtn() {
    const mounted = useSyncExternalStore(
      () => () => {},
      () => true,
      () => false
    )
    const { theme, setTheme } = useTheme()
    if (!mounted) {
        return null;
    }
    return (
      <button className="text-blue-600 dark:text-blue-50" onClick={()=>setTheme(theme === "dark"? "light": "dark")}>
          {theme === "light" ? <Moon/>:<Sun/>}
    </button>
  )
}
