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
        previewImages: ['underpool-long-fw.png', 'underpool-long-bc.png', 'sizes-tables/longsleeve-net-full.jpg'],
        price: 4000,
        article: 'underpool-long',
        title: 'underpool',
        type: ItemTypes.Longsleeve,
        description: 'Цвет: Молочный\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['underpool-tee-fw.png', 'underpool-tee-bc.png', 'sizes-tables/tee-net-full.jpg'],
        price: 3000,
        article: 'underpool-tee',
        title: 'underpool',
        type: ItemTypes.Tee,
        description: 'Цвет: Молочный\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['nika-tee-fw.png', 'nika-tee-bc.png', 'sizes-tables/tee-net-full.jpg'],
        price: 3000,
        article: 'nika-tee',
        title: 'nika',
        type: ItemTypes.Tee,
        description: 'Цвет: Черный\nМатериал: футер 2-х нитка плотность 240, 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['nika-long-fw.png', 'nika-long-bc.png', 'sizes-tables/longsleeve-net-full.jpg'],
        price: 4000,
        article: 'nika-long',
        title: 'nika',
        type: ItemTypes.Longsleeve,
        description: 'Цвет: Черный\nМатериал: футер 2-х нитка плотность 240, 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['olympicstuff-long.png', 'sizes-tables/longsleeve-net-full.jpg'],
        price: 4000,
        article: 'olympicstuff-long',
        title: 'olympic stuff',
        type: ItemTypes.Longsleeve,
        description: 'Цвет: Белый\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['swimmingstuff-tee-b.png', 'sizes-tables/tee-net-full.jpg'],
        price: 3000,
        article: 'swimmingstuff-tee-b',
        title: 'swimming stuff',
        type: ItemTypes.Tee,
        description: 'Цвет: Черный\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['swimmingstuff-shorts-b.png', 'sizes-tables/shorts-net-full.jpg'],
        price: 4000,
        article: 'swimmingstuff-shorts-b',
        title: 'swimming stuff',
        type: ItemTypes.Shorts,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['swimmingstuff-tee-w.png', 'sizes-tables/tee-net-full.jpg'],
        price: 3000,
        article: 'swimmingstuff-tee-w',
        title: 'swimming stuff',
        type: ItemTypes.Tee,
        description: 'Цвет: Белый\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['swimmingstuff-shorts-w.png', 'sizes-tables/shorts-net-full.jpg'],
        price: 4000,
        article: 'swimmingstuff-shorts-w',
        title: 'swimming stuff',
        type: ItemTypes.Shorts,
        description: 'Цвет: Белый\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['olympicstuff-tee.png', 'sizes-tables/tee-net-full.jpg'],
        price: 3000,
        article: 'olympicstuff-tee',
        title: 'olympic stuff',
        type: ItemTypes.Tee,
        description: 'Цвет: Белый\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['phelps-hands-fw.png', 'phelps-hands-bc.png', 'sizes-tables/longsleeve-net-full.jpg'],
        price: 4000,
        article: 'phelps-hands',
        title: 'phelps-hands',
        type: ItemTypes.Longsleeve,
        description: '100% хлопок Плотность 240гр',
        sizes: ['s', 'm', 'l', 'xl']
    },
    {
        previewImages: ['swimmingstuff-shorts-milk.png', 'sizes-tables/shorts-net-full.jpg'],
        price: 4000,
        article: 'swimmingstuff-shorts-milk',
        title: 'swimming stuff',
        type: ItemTypes.Shorts,
        description: 'Цвет: Молочный\nМатериал: футер 2-х нитка, плотность 240: 92% хлопок, 8% лайкра.',
        sizes: ['s', 'm', 'l', 'xl']
    }
]

export const SizesTables: SizeTableType[] = [
    {
        previewImage: 'sizes-tables/longsleeve-net.png',
        type: ItemTypes.Longsleeve
    },
    {
        previewImage: 'sizes-tables/tee-net.png',
        type: ItemTypes.Tee
    },
    {
        previewImage: 'sizes-tables/hoodie-net.png',
        type: ItemTypes.Hoodie
    },
    {
        previewImage: 'sizes-tables/shorts-net.png',
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
        img: '/sstuff/img/icon.png'
    },
    {
        name: 'Name2',
        description: 'Равным образом повышение уровня гражданского сознания требует от нас системного анализа дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития напрямую зависит от дальнейших направлений развитая системы массового участия. Повседневная практика показывает',
        img: '/sstuff/img/icon.png'
    },
    {
        name: 'Name3',
        description: 'Равным образом повышение уровня гражданского сознания требует от нас системного анализа дальнейших направлений развитая системы массового участия. Не следует, однако, забывать о том, что реализация намеченного плана развития напрямую зависит от дальнейших направлений развитая системы массового участия. Повседневная практика показывает',
        img: '/sstuff/img/icon.png'
    },
]