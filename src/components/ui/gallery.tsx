import Image from "next/image"
import { Skeleton } from "./skeleton"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type GalleryProps = {
    children: React.ReactNode
}

export const Gallery = ({ children }: GalleryProps) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2">
            {children}
        </div>
    )
}

export type GalleryItemProps = {
    url: string
}

export const GalleryItem1 = ({ url }: GalleryItemProps) => {
    return (
        <div className={cn("col-span-1 md:col-span-2 md:h-[250px] 2xl:h-[300px] relative group overflow-hidden rounded")}>
            <Image src={url} alt="" fill className="object-cover group-hover:scale-125 transition-all duration-300" />
        </div>
    )
}
export const GalleryItem2 = ({ url }: GalleryItemProps) => {
    return (
        <div className={cn("col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px] relative group overflow-hidden rounded")}>
            <Image src={url} alt="" fill className=" object-cover group-hover:scale-125 transition-all duration-300" />
        </div>
    )
}


export const GalleryLoading = () => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-2 ">
            <Skeleton className="col-span-1 md:col-span-2 md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 h-[200px] md:h-[250px] 2xl:h-[300px]" />
            <Skeleton className="col-span-1 md:col-span-2 md:h-[250px] 2xl:h-[300px]" />
        </div>
    )
}