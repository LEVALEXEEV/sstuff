import { ItemTypes } from "./const";
import { VideoType } from "./types/video";
import { ItemType } from "./types/item";
import { SizeTableType } from "./types/sizes-table";

export const Videos: VideoType[] = [
    {
        src: "videos/prev1.MOV",
        id: '1',
        description: 'collection',
        link: '/catalog'
    },
    {
        src: "videos/prev2.MOV",
        id: '2',
        description: 'stuff',
        link: '/catalog'
    },
    {
        src: "videos/prev3.MOV",
        id: '3',
        description: 'cup',
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
        type: ItemTypes.Shorts
    },
    {
        previewImages: ['olympicstuff-fw.jpg'],
        price: 200,
        id: 'olympicstuff',
        title: 'olympicstuff',
        type: ItemTypes.Tee
    }
]

export const SizesTables: SizeTableType[] = [
    {
        previewImage: 'sizes-tables/longsleeve-net.jpg',
        type: ItemTypes.Longsleeve
    },
    {
        previewImage: 'sizes-tables/tee-net.jpg',
        type: ItemTypes.Tee
    },
    {
        previewImage: 'sizes-tables/hoodie-net.jpg',
        type: ItemTypes.Hoodie
    },
    {
        previewImage: 'sizes-tables/shorts-net.jpg',
        type: ItemTypes.Shorts
    }
]