import { ItemTypes } from "../const"

export type CartItemType = {
    previewImages: string[]
    price: number
    id: string
    title: string
    type: ItemTypes
    description: string
    sizes: string[]
    selectedSize: string | undefined
}