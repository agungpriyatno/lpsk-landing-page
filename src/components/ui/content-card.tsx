import Image from "next/image"
import { Button } from "./button"
import Link from "next/link"


export type ContentCardProps = {
    title: string,
    description: string,
    url?: string,
    image?: string
}

export const ContentCardA = ({ title, description, url, image }: ContentCardProps) => {
    return (
        <section className="px-5 md:px-10 py-5 bg-background">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-col-1 xl:grid-cols-2 gap-3">
                    {image != undefined && <div className="w-full h-[350px] relative group overflow-hidden rounded">
                        <Image src={image} alt="" fill sizes="100vw" className="group-hover:scale-125 object-cover duration-300 transition-all" />
                    </div>}
                    <div className="flex flex-col justify-center gap-2">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-base">{description}</p>
                        {url != undefined && <Button variant={'outline'} size={'sm'} asChild>
                            <Link href={url} className="w-fit">Selengkapnya</Link>
                        </Button>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const ContentCardB = ({ title, description, url, image }: ContentCardProps) => {
    return (
        <section className="px-5 md:px-10 py-5 bg-background">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-col-1 xl:grid-cols-2 gap-3">
                    <div className="flex flex-col justify-center gap-2">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-base">{description}</p>
                        {url != undefined && <Button variant={'outline'} size={'sm'} asChild>
                            <Link href={url} className="w-fit">Selengkapnya</Link>
                        </Button>}
                    </div>
                    {image != undefined && <div className="w-full h-[350px] relative group overflow-hidden rounded">
                        <Image src={image} alt="" fill className="group-hover:scale-125 object-cover duration-300 transition-all" />
                    </div>}
                </div>
            </div>
        </section>
    )
}