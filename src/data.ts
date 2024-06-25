import { ItemTypes } from "./const";
import { VideoType } from "./types/Video";
import { ItemType } from "./types/item";

export const Videos: VideoType[] = [
    {
        src: "videos/prev1.MOV",
        id: '1',
        description: 'COLLECTION',
        link: '/catalog'
    },
    {
        src: "videos/prev2.MOV",
        id: '2',
        description: 'STUFF',
        link: '/catalog'
    },
    {
        src: "videos/prev3.MOV",
        id: '3',
        description: 'CUP',
        link: '/catalog'
    },
]

export const Items: ItemType[] = [
    {
        previewImages: ['phelps-hands-fw.jpg', 'phelps-hands-bc.jpg', 'longsleeve-net.jpg'],
        price: 200,
        id: 'phelps-hands',
        title: 'phelps-hands',
        type: ItemTypes.Hoodie
    },
    {
        previewImages: ['pants1-fw.jpg'],
        price: 200,
        id: 'pants1',
        title: 'shorts',
        type: ItemTypes.Pants
    },
    {
        previewImages: ['olympicstuff-fw.jpg'],
        price: 200,
        id: 'olympicstuff',
        title: 'olympicstuff',
        type: ItemTypes.Tee
    }
]