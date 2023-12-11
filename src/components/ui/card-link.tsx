import Image from "next/image"
import Link from "next/link"

export type CardLinkProps = {
    title: string,
    description?: string,
    redirectUrl: string,
    imageUrl: string
}

export const CardLink = ({ title, description, redirectUrl, imageUrl }: CardLinkProps) => {
    return (
        <Link href={redirectUrl} target="blank">
            <div className='h-[250px] w-full bg-background bg-slate-900 rounded overflow-hidden relative group text-slate-100'>
                <div className='absolute bottom-0 left-0 right-0 z-10 p-5'>
                    <h3 className='font-bold'>{title}</h3>
                    <small className='text-sm'>{description}</small>
                </div>
                <div className='h-full w-full relative'>
                    <Image src={imageUrl} alt='' fill className=' opacity-50 object-cover group-hover:scale-125 transition-all duration-300' />
                </div>
            </div>
        </Link>
    )
}