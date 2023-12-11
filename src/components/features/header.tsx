import { Volume2Icon } from "lucide-react"
import { Avatar, AvatarImage } from "../ui/avatar"
import { NavigationMenuImpl } from "./navigation-menu"
import { ThemeButton } from "./theme-button"

export const Header = () => {
  return (
    <header className='fixed w-full px-5 py-2 z-50 text-slate-800 dark:text-slate-100 bg-primary-foreground'>
      <div className="max-w-[1440px] mx-auto flex justify-between place-items-center">
      <div className='flex gap-2'>
        <Avatar className='h-8 w-8 border-2'>
          <AvatarImage src='/indonesia.png' />
        </Avatar>
        <Avatar className='h-8.5 w-8.5 border-2'>
          <AvatarImage src='/lpsk-logo.png' />
        </Avatar>
      </div>
      <div className='flex place-items-center gap-3'>
        <NavigationMenuImpl />
        <Volume2Icon />
        <ThemeButton />
      </div>
      </div>
    </header>
  )
}