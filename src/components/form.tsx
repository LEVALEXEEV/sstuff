import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { sendOrder } from "../api/send-order";
import { toast } from 'react-toastify';
import { setCart, setTotalPrice } from "../store/actions";
import { useForm } from "react-hook-form";

function Form(): JSX.Element {
    const cart = useAppSelector(store => store.cartItems);
    const totalPrice = useAppSelector(store => store.totalPrice);
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [shipOption, setShipOption] = useState({service: 'SDEK', type: 'point'});
    const { handleSubmit, register} = useForm();

    const onSubmit = async () => {
        const form = document.getElementById('user-form') as HTMLFormElement;
        try {
            setIsLoading(true);
            const response = await sendOrder(cart, form, shipOption, totalPrice);
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
            else toast.warn(response, {
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
        <>
        <iframe name="votar" style={{display: 'none'}}></iframe>
        <form id='user-form' onSubmit={handleSubmit(() => onSubmit())} target="votar">
            <p>
                <label htmlFor="name">Name:</label>
                <input className="name" type="text" id="name" placeholder="Ivan Ivanov"
                    {...register("name", {
                        required: "Required",
                        pattern: {
                            value: /^([А-ЯЁа-яё]{2,15}\s{0,3}){1,3}$||([A-Za-z]{2,15}\s{0,3}){1,3}$/,
                            message: "Ошибка в поле имени"
                        }
                    })}
                />
            </p>
            <p>
                <label htmlFor="email">Email:</label>
                <input className="email" type="email" id="email" placeholder="swimming@stuff.ru"
                    {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^([A-Za-z\d._]+@[A-Za-z\d._]+.[A-Za-z]{2,})$/i,
                            message: "Ошибка в поле почты"
                        }
                    })}
                />
            </p>
            <p>
                <label htmlFor="phone">Phone:</label>
                <input className="phone" type="tel" id="phone" placeholder="+7 (952) 123-45-67"
                    {...register("phone", {
                        required: "Required",
                        pattern: {
                            value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i,
                            message: "Ошибка в поле номера телефона"
                        }
                    })}
                />
            </p>
            <p>
                <label htmlFor="network">Telegram:</label>
                <input className="network" type="text" id="network" autoComplete="off" placeholder="@sstuff" 
                    {...register("network", {
                        required: "Required",
                    })}
                />
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
                    <input className="city" type="text" id="city" placeholder="Санкт-Петербург"
                        {...register("city", {
                            required: "Required",
                            pattern: {
                                value: /^([А-ЯЁа-яё]{2,20}\s{0,3}){1,5}$ || ([A-Za-z]{2,20}\s{0,3}){1,5}$/i,
                                message: "Ошибка в поле города"
                            }
                        })}
                    />
                </div>
                <div className="adress__part ship-street">
                    <label htmlFor="street">Улица:</label>
                    <input className="street" type="text" id="street" placeholder="Невский пр."
                        {...register("street", {
                            required: "Required",
                            pattern: {
                                value: /^([А-ЯЁа-яё]{2,20}\s{0,3}){1,5}$ || ([A-Za-z]{2,20}\s{0,3}){1,5}$/i,
                                message: "Ошибка в поле улицы"
                            }
                        })}
                    />
                </div>
                <div className="adress__part ship-house">
                    <label htmlFor="house">Дом:</label>
                    <input className="house" type="text" id="house" placeholder="1"
                        {...register("house", {
                            required: "Required",
                        })}
                    />
                </div>
                <div className="adress__part ship-apartments">
                    <label htmlFor="apartments">Квартира:</label>
                    <input className="apartments" type="text" id="apartments" placeholder="52"
                        {...register("apartments", {required: (shipOption.type == 'rider')?'Required':''})}
                    /> 
                </div>
                <div className="adress__part ship-index">
                    <label htmlFor="index">Индекс:</label>
                    <input className="index" type="text" id="index" placeholder="170652" 
                        {...register("index", {
                            required: "Required",
                            pattern: {
                                value: /^\d{6}$/i,
                                message: "Ошибка в поле индекса"
                            }
                        })}
                    /> 
                </div>
            </div>
            <button type="submit" disabled={(cart.length == 0 || isLoading)}>Отправить</button>
        </form>
        </>
    )
}

export default Form;