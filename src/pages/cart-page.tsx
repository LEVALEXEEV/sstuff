import Header from "../components/header";
import Footer from "../components/footer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCart, setTotalPrice } from "../store/actions";
import { useEffect, useState } from "react";
import { calculatePromo, findItemInArray, removeItemFromArray } from "../utils";
import Form from "../components/form";


function CartPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(store => store.cartItems);

    const calculateTotalPrice = () => (cart.reduce((partialSum, a) => partialSum + a.price, 0));

    const device = useAppSelector(store => store.device);
    const totalPrice = useAppSelector(store => store.totalPrice);
    const [promo, setPromo] = useState(1);

    useEffect(() => {
        const totalPrice = (promo <= 1)? calculateTotalPrice() * promo : calculateTotalPrice() - promo;
        dispatch(setTotalPrice(totalPrice));
    }, [cart, promo]);
    
    const handlePromoAppliance = () => {
        const userCode = (document.getElementById('promocode') as HTMLInputElement).value;
        const promo = calculatePromo(cart, userCode);
        setPromo(promo);
    }

    const handleSizeChange = (target: HTMLSelectElement) => {
        const id = target.classList[1];
        const newItem = {...findItemInArray(id, cart)[0], selectedSize: target.value};
        const newCart = removeItemFromArray(id, cart);
        newCart.push(newItem);
        dispatch(setCart(newCart));
    }
    
    return (
        <>
            <Header />
            <section className="main__wrap cart__main" >
                <div className="order__wrap">
                    <h2 className="page__header">CART</h2>
                    <div className="cart-item__list">
                        {
                        (cart.length != 0)
                        ?
                            cart.map(item => (
                                <div className="cart-item__wrapper" key={item.id}>
                                    <div className="cart-item" >
                                        <div className="item-cart__preview">
                                            <img className="cart_item_preview__img" src={'/sstuff/img/items/'+item.previewImages[0]} width={(device)?'35px':'50px'}/>
                                        </div>
                                        <div className="item-left">
                                            <h3 className="cart_item_title">{item.title}</h3>
                                            {(item?.sizes.length != 0) 
                                                ? 
                                                    <div className="cart-size-selector__wrap">
                                                        <label className="size-select_label" htmlFor={'size-select'+item.id}>Size</label>
                                                        <select className = {'size-select '+item.id} name="drop-down" id={'size-select'+item.id} defaultValue={item.selectedSize} onChange={(evt) => handleSizeChange(evt.target)}>
                                                            {item.sizes.map(size => (
                                                                <option value={size} key={size} >{size}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                :
                                                    undefined
                                            }
                                        </div>
                                        <div className="item-middle">{item.price}</div>
                                        <div className="item-right"><img className="del-from-cart__icon" src="/sstuff/img/cross.svg" width={'25vmin'} onClick={() => dispatch(setCart(removeItemFromArray(item.id, cart)))}/></div>
                                    </div>
                                    <span></span>
                                </div>
                            ))
                        :
                            <div className="empty-cart"><i>ПУСТО</i></div>
                        }
                    </div>
                    <div className="order-total">
                        <div className="promocode__wrap">
                            <div className="promocode-input">
                                <h3 className="promo-title">Промокод</h3>
                                <input type="text" name="promocode" id="promocode" minLength={4} maxLength={10} disabled={(promo != 1)}></input>
                            </div>
                            <button className="promo__button" onClick={() => handlePromoAppliance()} disabled={(promo != 1)}><i>применить</i></button>
                        </div>
                        <div className="total__wrap">
                            <h2 className="total__title">Всего:</h2>
                            <div className="total__price">{totalPrice} руб</div>
                        </div>
                    </div>
                    <h2 className="order__header page__header">ИНФОРМАЦИЯ ПО ДОСТАВКЕ</h2>
                    <div className="form__wrap">
                        <Form />
                    </div>
                    </div>
            </section>
            <Footer/>
        </>
    );
}

export default CartPage;