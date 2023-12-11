"use client"

import { Sun } from "lucide-react"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"

export const ThemeButton = () => {
    const {theme, setTheme} = useTheme()
    return <Button variant={'ghost'} size={'icon'} onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        <Sun/>
    </Button>
}