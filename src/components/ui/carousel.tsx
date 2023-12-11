"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TCarouselItem } from "@/types/utils";
import { Skeleton } from "./skeleton";

const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 0.4,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};

const titleSlideVariant = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};

export const CarouselLoading = () => {
    return (
        <Skeleton className="w-full h-screen relative bg-slate-800  text-slate-100  group overflow-hidden">
            <Button size={'icon'} variant={'ghost'} className="absolute left-10 top-1/2 translate-y-1/2" >
                <ChevronLeft />
            </Button>
            <Button size={'icon'} variant={'ghost'} className="absolute right-10 top-1/2 translate-y-1/2">
                <ChevronRight />
            </Button>
            <div className="absolute left-10 bottom-10 flex gap-2">

            </div>
        </Skeleton>
    )
}

export const Carousel = ({ images }: { images: TCarouselItem[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };


    return (
        <div className="w-full h-screen relative bg-slate-800  text-slate-100  group overflow-hidden">
            <AnimatePresence>
                <div className="w-full h-full relative group-hover:scale-125 transition-all duration-500">
                    <motion.img
                        className="w-full h-full opacity-40 object-cover"
                        key={currentIndex}
                        src={images[currentIndex].image}
                        variants={slideVariants}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"

                    />
                </div>
                <motion.div
                    className="absolute left-0 top-0 h-full w-full flex flex-col justify-end px-10 py-20"
                    key={currentIndex}
                    variants={titleSlideVariant}
                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                    animate="visible"
                    exit="exit">
                    <h1 className='text-4xl font-bold'>{images[currentIndex].title}</h1>
                    <p className='text-base'>{images[currentIndex].descriptions}</p>

                </motion.div>
            </AnimatePresence>
            <Button size={'icon'} variant={'ghost'} className="absolute left-10 top-1/2 translate-y-1/2" onClick={handlePrevious}>
                <ChevronLeft />
            </Button>
            <Button size={'icon'} variant={'ghost'} className="absolute right-10 top-1/2 translate-y-1/2" onClick={handleNext}>
                <ChevronRight />
            </Button>
            <div className="absolute left-10 bottom-14 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-slate-100"} transition-colors duration-300`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};
