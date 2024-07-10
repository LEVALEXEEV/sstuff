import { ItemTypes } from "./const";
import { VideoType } from "./types/video";
import { ItemType } from "./types/item";
import { SizeTableType } from "./types/sizes-table";
import { PromocodeType } from "./types/promocode";
import { CreatorType } from "./types/creator";

export const Videos: VideoType[] = [
    {
        src: "videos/prev1.MOV",
        id: '1',
        description: 'collection',
        link: 'catalog'
    },
    {
        src: "videos/prev2.MOV",
        id: '2',
        description: 'stuff',
        link: 'catalog'
    },
    {
        src: "videos/prev3.MOV",
        id: '3',
        description: 'cup',
        link: 'catalog'
    },
]

export const Items: ItemType[] = [
    {
        previewImages: ['phelps-hands-fw.jpg', 'phelps-hands-bc.jpg', 'sizes-tables/longsleeve-net.jpg'],
        price: 2000,
        article: 'phelps-hands',
        title: 'phelps-hands',
        type: ItemTypes.Hoodie,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['pants1-fw.jpg', 'phelps-hands-fw.jpg', 'phelps-hands-bc.jpg'],
        price: 200,
        article: 'shorts',
        title: 'shorts',
        type: ItemTypes.Shorts,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['olympicstuff-fw.jpg'],
        price: 200,
        article: 'olympicstuff',
        title: 'olympic-stuff tee',
        type: ItemTypes.Tee,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
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

export const Promocodes: PromocodeType[] = [
    {
        keyWord: 'JULYSALE',
        sale: 0.9
    },
    {
        keyWord: 'STUFF',
        sale: 0.8
    }
]

export const Creators: CreatorType[] = [
    {
        name: 'Name1',
        description: 'Равным образом повышение уровня гражданского сознания требует от нас системного анализа дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития напрямую зависит от дальнейших направлений развитая системы массового участия. Повседневная практика показывает',
        img: '/sstuff/img/icon.jpg'
    },
    {
        name: 'Name2',
        description: 'Равным образом повышение уровня гражданского сознания требует от нас системного анализа дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития напрямую зависит от дальнейших направлений развитая системы массового участия. Повседневная практика показывает',
        img: '/sstuff/img/icon.jpg'
    },
    {
        name: 'Name3',
        description: 'Равным образом повышение уровня гражданского сознания требует от нас системного анализа дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития напрямую зависит от дальнейших направлений развитая системы массового участия. Повседневная практика показывает',
        img: '/sstuff/img/icon.jpg'
    },
]