"use client"

import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Prettify } from "@/types/utils"

export type TMenuItem = {
    title: string,
    href: string,
    children: Prettify<Omit<TMenuItem, "children"> & { description: string }>[]
}

export const data: TMenuItem[] = [
    {
        title: "Beranda",
        href: "/",
        children: [],
    },
    {
        title: "Profil",
        href: "/",
        children: [
            {
                title: "Sekilas LPSK",
                href: "/information",
                description: ""
            },
            {
                title: "Struktur Organisasi",
                href: "/information",
                description: ""
            },
            {
                title: "Pejabat Strukturan",
                href: "/information",
                description: ""
            },
            {
                title: "Road Map & Rencana Strategi",
                href: "/information",
                description: ""
            },
            {
                title: "Profil Pimmpinan",
                href: "/information",
                description: ""
            },
            
        ],
    },
    {
        title: "Berita",
        href: "/",
        children: [],
    },
    {
        title: "Publikasi",
        href: "/",
        children: [],
    },
    {
        title: "Peraturan",
        href: "/",
        children: [],
    },
    {
        title: "Informasi & Pelayanan",
        href: "/",
        children: [
            {
                title: "Standar Pelayanan Publik",
                href: "/information",
                description: ""
            },
            {
                title: "Standar Pelayanan Pemerintah Permohonan",
                href: "/information",
                description: ""
            },
            {
                title: "Standar Pelayanan Pro Aktif dan Darurat",
                href: "/information",
                description: ""
            },
            {
                title: "Standar Pelayanan Informasi Publik",
                href: "/information",
                description: ""
            },
            {
                title: "Standar Pelayanan Pemenuhan Hak",
                href: "/information",
                description: ""
            },
            {
                title: "Informasi LHKPN",
                href: "/information",
                description: ""
            },
            {
                title: "Pengaduan Pelayanan Publik",
                href: "/information",
                description: ""
            },
        ],
    },
    {
        title: "Kerja Sama",
        href: "/",
        children: [
            {
                title: "Instansi Aparat Penegak Hukum",
                href: "/information",
                description: ""
            },
            {
                title: "Instansi Hukum",
                href: "/information",
                description: ""
            },
            {
                title: "Internasional",
                href: "/information",
                description: ""
            },
            {
                title: "Kesehatan",
                href: "/information",
                description: ""
            },
            {
                title: "Pendidikan",
                href: "/information",
                description: ""
            },
            {
                title: "LSM / Pers",
                href: "/information",
                description: ""
            },
        ],
    },

    {
        title: "Kontak Kami",
        href: "/information",
        children: []
    },


]

export const NavigationMenuImpl = () => {
    const menu = data
    return (
        <NavigationMenu className="hidden xl:block">
            <NavigationMenuList>
                {menu.map((item, i) => {

                    if (item.children.length > 0) {
                        return (
                            <NavigationMenuItem key={i}>
                                <NavigationMenuTrigger className="bg-transparent">{item.title}</NavigationMenuTrigger>
                                <NavigationMenuContent >
                                    <ul className="grid gap-3 p-4 w-[800px] md:grid-cols-2 ">
                                        {item.children.map((subItem, j) => (
                                            <ListItem
                                                key={`${i}-${j}`}
                                                title={subItem.title}
                                                href={subItem.href}
                                            >
                                                {subItem.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={i}>
                            <Link href={item.href} legacyBehavior passHref>
                                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                                    {item.title}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
