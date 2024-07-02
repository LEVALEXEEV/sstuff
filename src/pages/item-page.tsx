import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Items } from "../data";
import { useState } from "react";
import Background from "../components/background";
import { useAppDispatch, useAppSelector } from "../hooks";
import { addItemToCart, removeItemFromCart } from "../store/actions";
import { ItemType } from "../types/item";
import { CartItemType } from "../types/cart-item";
import { removeItemFromCartHandler } from "../const";

function ItemPage(): JSX.Element {
    const [activeImg, setActiveImg] = useState(1);
    const [isAdded, setAdded] = useState(false);
    const params = useParams();
    const item = Items.find((item) => item.id === params.id);
    const device: boolean = useAppSelector((state) => state.device);
    const cart = useAppSelector((state) => state.cartItems);
    const dispatch = useAppDispatch();
    const indexes = [];
    for (var index in item?.previewImages) {indexes.push(Number(index)+1);}

    const addToCartHandler = (item: ItemType  | undefined) => {
        if (item) {
            const targetItem: CartItemType = 
                {
                    previewImages: item.previewImages,
                    price: item.price,
                    id: item.id,
                    title: item.title,
                    type: item.type,
                    description: item.description,
                    sizes: item.sizes,
                    selectedSize: document.getElementById("size-select")?.value
                }
            if (isAdded){
                dispatch(removeItemFromCart(removeItemFromCartHandler(targetItem, cart)));
                setAdded(false);
            }
            else {
                dispatch(addItemToCart(targetItem));
                setAdded(true);
            }
        }
    } 
    return (
      <>
        <Header backLink="/catalog"/>
        <section className="main__wrap main__item__wrap">
          <ul>
            <li className="item-img-slider__wrap" style={(device)? {maxWidth: '12em', minWidth: '11em'} : {minWidth: '20em'}}>
                <div className="wrapper">
                    {indexes.map((i) => (<input key={item?.id + `${i}`} type="radio" name="point" id={"slide" + `${i}`} defaultChecked={i == 1} onChange={() => setActiveImg(i)}></input>))}
                    <div className="slider">
                        {indexes.map((i) => (<div key={item?.id + `${i}`} className={"slides slide" + `${i}`}><img src={"img/items/" + item?.previewImages[i-1]}/></div>))}
                    </div>
                    <div className="controls">
                        {indexes.map((i) => (<label key={item?.id + `${i}`} htmlFor={"slide" + `${i}`} style={(device)? {width: '40px', height: '40px'} : {width: '60px', height: '60px'}} onClick={() => setActiveImg(i)}><img src={"img/items/" + item?.previewImages[i-1]}/></label>))}
                    </div>
                </div>
                <label className="back__button" htmlFor={"slide" + (activeImg-1)}><img src="img/arrow-prev-icon.svg" width={35}/></label>
                <label className="forward__button" htmlFor={"slide" + (activeImg+1)}><img src="img/arrow-next-icon.svg" width={35}/></label>
            </li>
            <li className="item-description__wrap" style={(device)? {maxWidth: '12em', minWidth: '10.5em'} : {minWidth: '500px'}}>
                <div className="item-description__wrap-div" style={(device)? {minHeight: '400px'} : {minHeight: '600px'}}>
                    <article className="item_upper__wrapper">
                        <h1>{item?.title}</h1>
                        <h2>{'ID: ' + item?.id}</h2>
                    </article>
                    <article className="item_middle__wrapper">
                        <h3>{item?.price}</h3>
                        {(item?.sizes.length != 0) 
                            ? 
                                <div className="size-selector__wrap">
                                    <label htmlFor="size-select">Size</label>
                                    <select name="drop-down" id="size-select">
                                        {item?.sizes.map((size) => (<option value={size} key={size}>{size}</option>))}
                                    </select>
                                </div>
                            :
                                undefined
                        }
                    </article>
                    <article>
                        <button onClick={() => addToCartHandler(item)}>{(!isAdded)?'Add':'Remove'}</button>
                        <p>{item?.description}</p>
                    </article>
                </div>
                <Background />
            </li>
          </ul>
        </section>
        <Footer/>
      </>
    );
  }
  
  export default ItemPage;