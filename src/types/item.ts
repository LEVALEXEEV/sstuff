import { ItemTypes } from "../const"

export type ItemType = {
    previewImages: string[]
    price: number
    id: string
    title: string
    type: ItemTypes
    description: string
    sizes: string[]
}