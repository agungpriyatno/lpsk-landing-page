"use client"

import { TCarouselItem } from "@/types/utils"
import { Carousel, CarouselLoading } from "../ui/carousel"
import { Suspense, useEffect, useState } from "react"

const carouselItems: TCarouselItem[] = [
    {
        title: "Carousel A",
        descriptions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam alias dicta maiores fuga fugit?",
        image: "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        title: "Carousel B",
        descriptions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam alias dicta maiores fuga fugit?",
        image: "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Carousel C",
        descriptions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam alias dicta maiores fuga fugit?",
        image: "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        title: "Carousel D",
        descriptions: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam alias dicta maiores fuga fugit?",
        image: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
]


export const CarouselSection = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => { setLoading(false) }, 1000)
    })
    return (
        <section>
            <Suspense fallback={<CarouselLoading />}>
                <Carousel images={carouselItems} />
            </Suspense>
        </section>
    )
}