import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Items } from "../data";
import { useEffect, useState } from "react";
import Background from "../components/background";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCart } from "../store/actions";
import { ItemType } from "../types/item";
import { CartItemType } from "../types/cart-item";
import { getHash, removeItemFromArray } from "../utils";
import Slider from "../components/slider";


function ItemPage(): JSX.Element {
    const [isAdded, setAdded] = useState(false);
    const params = useParams();
    const item = Items.find((item) => item.article === params.article);
    const [itemID, setItemID] = useState('');
    const [selectedSize, setSelectedSize] = useState(item?.sizes[0]);
    
    const cart = useAppSelector((state) => state.cartItems);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setItemID(item?.article + '_' + getHash(JSON.stringify(item)));
        setSelectedSize((document.getElementById("size-select") as HTMLInputElement).value);
    },[selectedSize])

    const addToCartHandler = (item: ItemType  | undefined) => {
        if (item) {
            const targetItem: CartItemType = 
                {
                    previewImages: item.previewImages,
                    price: item.price,
                    article: item.article,
                    title: item.title,
                    type: item.type,
                    description: item.description,
                    sizes: item.sizes,
                    selectedSize: selectedSize,
                    id: itemID
                }
            if (isAdded){
                dispatch(setCart(removeItemFromArray(targetItem.id, cart)));
                setAdded(false);
            }
            else {
                const newCart: CartItemType[] = [];
                cart.map((item) => newCart.push(item))
                newCart.push(targetItem);
                dispatch(setCart(newCart));
                setAdded(true);
            }
        }
    } 
    return (
        <>
            <Header backLink="/sstuff/catalog"/>
            <section className="main__wrap main__item__wrap">
                <div className="main main__item">
                    <Slider item={item}/>
                    <div className="item__part description-part">
                        <div className="description-part-div">
                            <div className="item_upper__wrapper">
                                <h1 className="item__title">{item?.title}</h1>
                                <h2 className="item__article">{'ID: ' + item?.article}</h2>
                            </div>
                            <div className="item_middle__wrapper">
                                <h3 className="item__price">{item?.price}</h3>
                                {(item?.sizes.length != 0) 
                                    ? 
                                        <div className="size-selector__wrap">
                                            <label htmlFor="size-select">Size</label>
                                            <select className = "size-select" name="drop-down" id="size-select" onChange={(evt) => {setSelectedSize(evt.target.value); setAdded(false)}}>
                                                {item?.sizes.map((size) => (<option value={size} key={size}>{size}</option>))}
                                            </select>
                                        </div>
                                    :
                                        undefined
                                }
                            </div>
                            <div className="item_bottom__wrapper">
                                <button className="add-remove__button" onClick={() => addToCartHandler(item)}>{(!isAdded)?'Add':'Remove'}</button>
                                <p className="item-description__paragraph">{item?.description}</p>
                            </div>
                        </div>
                       <Background firstColor={"rgba(100,0,255"} secondColor={"rgba(100,130,255"} thirdColor={"rgba(0,237,255"} />
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
  }

  export default ItemPage;