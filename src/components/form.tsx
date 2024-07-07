import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { sendOrder } from "../api/send-order";
import { toast } from 'react-toastify';
import { setCart, setTotalPrice } from "../store/actions";

function Form(): JSX.Element {
    const cart = useAppSelector(store => store.cartItems);
    const totalPrice = useAppSelector(store => store.totalPrice);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [shipOption, setShipOption] = useState({service: 'SDEK', type: 'point'});

    const handleSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        const form = document.getElementById('user-form') as HTMLFormElement;
        try {
            setIsLoading(true);
            const response = await sendOrder(cart, form, shipOption, totalPrice);
            console.log(response);
            if (response == 200) {
                toast.info('Заказ зарегисториован! По поводу оплаты с Вами свяжется администратор.', {
                    position: 'top-center',
                    bodyStyle: {
                        fontFamily: '"Montserrat", sans-serif'
                    },
                    theme: 'dark'
                });
                dispatch(setCart([]));
                dispatch(setTotalPrice(0));
            }
            else toast.warn(`Ошибка ${response}`, {
                position: 'top-center',
                bodyStyle: {
                    fontFamily: '"Montserrat", sans-serif'
                },
                theme: 'dark'
            });
                
        }
        catch(e) {
            
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <form id='user-form' onSubmit={(evt) => handleSubmit(evt)} >
            <p>
                <label htmlFor="name">Name:</label>
                <input className="name" type="text" name="name" id="name" placeholder="Ivan Ivanov" required/>
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input className="email" type="email" name="email" id="email" placeholder="swimming@stuff.ru" required/>
            </p>
            <p>
                <label htmlFor="phone">Phone:</label>
                <input className="phone" type="tel" name="phone" id="phone" placeholder="+7 (952) 123-45-67" required pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
            </p>
            <p>
                <label htmlFor="network">Telegram:</label>
                <input className="network" type="text" name="network" id="network" autoComplete="off" placeholder="@sstuff" required/>
            </p>
            <label className="article__label">Ship:</label>
            <input type="radio" name="ship" id="ship_sdek_pick-up-point" defaultChecked onChange={()=>setShipOption({service: 'SDEK', type: 'point'})}/>
            <input type="radio" name="ship" id="ship_sdek_rider" onChange={()=>setShipOption({service: 'SDEK', type: 'rider'})}/>
            <input type="radio" name="ship" id="PR_pick-up-point" onChange={()=>setShipOption({service: 'PR', type: 'point'})}/>
            <input type="radio" name="ship" id="PR_rider" onChange={()=>setShipOption({service: 'PR', type: 'rider'})}/>
            <div className="ship__wrap">
                <div className="ship-option__selector">
                    <div className="ship-option__wrap ship_sdek_pick-up-point">
                        <label htmlFor="ship_sdek_pick-up-point">СДЭК (до пункта выдачи)</label>
                    </div>
                    <div className="ship-option__wrap ship_sdek_rider">
                        <label htmlFor="ship_sdek_rider">СДЭК (курьером)</label>
                    </div>
                    <div className="ship-option__wrap PR_pick-up-point">
                        <label htmlFor="PR_pick-up-point">Почта России (до пункта выдачи)</label>
                    </div>
                    <div className="ship-option__wrap PR_rider">
                        <label htmlFor="PR_rider">Почта России (курьером)</label>
                    </div>
                </div>
            </div>
            <div className="adress-label__wrap">
                <label className="article__label">Address:</label>
                <div className="user-hints__ship">    
                    <h4 className="pick-up-point__hint">введите адрес пункта выдачи</h4>
                    <h4 className="rider__hint">введите адрес проживания</h4>
                </div>
            </div>
            <div className="adress__wrap">
                <div className="adress__part ship-city">
                    <label htmlFor="city">Город:</label>
                    <input className="city" type="text" name="city" id="city" required/>
                </div>
                <div className="adress__part ship-street">
                    <label htmlFor="street">Улица:</label>
                    <input className="street" type="text" name="street" id="street" required/>
                </div>
                <div className="adress__part ship-house">
                    <label htmlFor="house">Дом:</label>
                    <input className="house" type="text" name="house" id="house" required/>
                </div>
                <div className="adress__part ship-apartments">
                    <label htmlFor="apartments">Квартира:</label>
                    <input className="apartments" type="text" name="apartments" id="apartments" required={(shipOption.type == 'rider')}/> 
                </div>
                <div className="adress__part ship-index">
                    <label htmlFor="index">Индекс:</label>
                    <input className="index" type="text" name="index" id="index" required/> 
                </div>
            </div>
            <button type="submit" disabled={(cart.length == 0 || isLoading)}>Отправить</button>
        </form>
    )
}

export default Form;