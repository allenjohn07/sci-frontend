import { ScrollArea, ScrollBar } from "./ui/scroll-area"
import { Image } from "@nextui-org/react"

const images = [
  {
    id: "1",
    path: "about-photo-1",
  },
  {
    id: "2",
    path: "about-photo-2",
  },
  {
    id: "3",
    path: "about-photo-3",
  },
  {
    id: "4",
    path: "about-photo-4",
  },
  {
    id: "5",
    path: "about-photo-5",
  }
]

export function ImagesComponent() {
  return (
    <ScrollArea className="max-w-screen-lg mx-auto whitespace-nowrap rounded-md mb-5">
      <div className="flex w-max space-x-4 pt-10">
        {images.map((image) => (
          <figure key={image.id} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={`https://sci-about-photos.s3.eu-north-1.amazonaws.com/${image.path}.jpg`}
                alt="sci-image"
                className="aspect-[3/4] h-[200px] md:h-[250px] w-[250px] md:w-[350px] object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
