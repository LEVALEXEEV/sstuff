import Header from "../components/header";
import Footer from "../components/footer";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setCart, setTotalPrice } from "../store/actions";
import { useEffect, useState } from "react";
import { Promocodes } from "../data";
import { findItemInArray, removeItemFromArray } from "../utils";
import Background from "../components/background";
import Form from "../components/form";


function CartPage(): JSX.Element {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(store => store.cartItems);

    const calculateTotalPrice = () => (cart.reduce((partialSum, a) => partialSum + a.price, 0));

    const device = useAppSelector(store => store.device);
    const totalPrice = useAppSelector(store => store.totalPrice);
    const [promo, setPromo] = useState(1);

    useEffect(() => {
        dispatch(setTotalPrice(calculateTotalPrice() * promo));
    }, [cart, promo]);
    
    const handlePromoAppliance = () => {
        const userCode = (document.getElementById('promocode') as HTMLInputElement).value;
        const availableCode = Promocodes.filter(promocode => promocode.keyWord == userCode)
        if (availableCode.length == 1) {
            setPromo(availableCode[0].sale);
        }
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
                <div className={(device)?"order__wrap":"order__wrap__pc"}>
                    <h2 className="page__header order__header">CART</h2>
                    <div className="cart-item__list">
                        {
                        (cart.length != 0)
                        ?
                            cart.map(item => (
                                <div className="cart-item__wrapper" key={item.id}>
                                    <div className="cart-item" >
                                        <div className="item-cart__preview">
                                            <img src={'/sstuff/img/items/'+item.previewImages[0]}/>
                                        </div>
                                        <div className="item-left">
                                            <h3>{item.title}</h3>
                                            <div className="cart-size-selector__wrap">
                                                <label htmlFor={'size-select'+item.id}>Size</label>
                                                <select className = {'size-select '+item.id} name="drop-down" id={'size-select'+item.id} defaultValue={item.selectedSize} onChange={(evt) => handleSizeChange(evt.target)}>
                                                    {item.sizes.map(size => (
                                                        <option value={size} key={size} >{size}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="item-middle">{item.price}</div>
                                        <div className="item-right"><img src="/sstuff/img/cross.svg" width={'25vmin'} onClick={() => dispatch(setCart(removeItemFromArray(item.id, cart)))}/></div>
                                    </div>
                                    <span></span>
                                </div>
                            ))
                        :
                            <div className="empty-cart"><i>EMPTY</i></div>
                        }
                    </div>
                    <div className="order-total">
                        <div className="promocode__wrap">
                            <div className="promocode-input">
                                <h3>Promocode</h3>
                                <input type="text" name="promocode" id="promocode" minLength={4} maxLength={10} disabled={(promo != 1)}></input>
                            </div>
                            <button onClick={() => handlePromoAppliance()} disabled={(promo != 1)}>apply</button>
                        </div>
                        <div className="total__wrap">
                            <h2>Total:</h2>
                            <div className="total__price">{totalPrice}</div>
                        </div>
                    </div>
                    <h2 className="order__header long__header">SHIP INFORMATION</h2>
                    <div className="order-inf__wrap" style={(device)?{minWidth: '100%'}:{minWidth: '150%'}}>
                        <div className="form__wrap">
                            <Form />
                        </div>
                    </div>
                </div>
                <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
            </section>
            <Footer/>
        </>
    );
}

export default CartPage;