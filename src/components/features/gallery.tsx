import { Gallery, GalleryItem1, GalleryItem2, GalleryLoading } from "../ui/gallery"

export const GallerySection = () => {
    return (
        <div className="bg-background">
            <div className="px-5 py-5 space-y-2  max-w-[1440px] mx-auto">
                <h3 className=" text-2xl font-bold">Galeri</h3>
                <Gallery>
                    <GalleryItem1 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem2 url="https://placekitten.com/640/360" />
                    <GalleryItem1 url="https://placekitten.com/640/360" />
                </Gallery>
                {/* <GalleryLoading/> */}
            </div>
        </div>
    )
}