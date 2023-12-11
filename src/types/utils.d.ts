export type Prettify<T> = {
    [K in keyof T]: T[K] & {}
}

export type TCarouselItem = {
    title: string
    descriptions?: string
    image: string
}