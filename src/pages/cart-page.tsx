import Header from "../components/header";
import Footer from "../components/footer";
import { s } from "vitest/dist/reporters-5f784f42.js";


function CartPage(): JSX.Element {
  const device: boolean = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false);
  return (
    <>
      <Header />
      <section className="main__wrap" >
        <div className="order__wrap">
            <h2 className="order__header">CART</h2>
            <div className="cart-item__list">
                <div className="cart-item">
                    <div className="item-cart__preview">
                        <img src="img/icon.jpg"/>
                    </div>
                    <div className="item-left">
                        <h3>SwimmingStuff</h3>
                        <div className="cart-size-selector__wrap">
                            <label htmlFor="size-select">Size</label>
                            <select name="drop-down" id="size-select">
                                <option value="xl" key="xl">xl</option>
                                <option value="l" key="l">l</option>
                                <option value="m" key="m">m</option>
                            </select>
                        </div>
                    </div>
                    <div className="item-middle">2000</div>
                    <div className="item-right"><img src="img/cross.svg" width={'25vmin'} /></div>
                </div>
                <span></span>
                <div className="cart-item">
                    <div className="item-cart__preview">
                        <img src="img/icon.jpg"/>
                    </div>
                    <div className="item-left">
                        <h3>SwimmingStuff</h3>
                        <div className="cart-size-selector__wrap">
                            <label htmlFor="size-select">Size</label>
                            <select name="drop-down" id="size-select">
                                <option value="xl" key="xl">xl</option>
                                <option value="l" key="l">l</option>
                                <option value="m" key="m">m</option>
                            </select>
                        </div>
                    </div>
                    <div className="item-middle">2000</div>
                    <div className="item-right"><img src="img/cross.svg" width={'25vmin'} /></div>
                </div>
                <span></span>
            </div>
            <div className="order-total">
                <div className="promocode__wrap">
                    <h3>Promocode</h3>
                    <input type="text" name="promocode" id="promocode" minLength={4} maxLength={10}></input>
                    <button>apply</button>
                </div>
                <div className="total__wrap">
                    <h2>Total:</h2>
                    <div className="total__price">4000</div>
                </div>
            </div>
            <h2 className="order__header">ORDER INFORMATION</h2>
            <div className="order-inf__wrap" style={(device)?{minWidth: '100%'}:{minWidth: '150%'}}>
                <div className="form__wrap">
                    <form action="" method="get">
                        <p>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder="Ivan Ivanov" required/>
                        </p>
                        <p>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="swimming@stuff.ru" required/>
                        </p>
                        <p>
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" name="phone" id="phone" placeholder="+7 (952) 123-45-67" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"/>
                        </p>
                        <label className="article__label">Ship:</label>
                        <input type="radio" name="ship" id="ship_sdek_pick-up-point" defaultChecked/>
                        <input type="radio" name="ship" id="ship_sdek_rider"/>
                        <input type="radio" name="ship" id="PR_pick-up-point"/>
                        <input type="radio" name="ship" id="PR_rider"/>
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
                        <label className="article__label">Address:</label>
                        <div className="adress__wrap">
                            <div className="adress__part ship-city">
                                <label htmlFor="city">Город:</label>
                                <input type="text" name="city" id="city" required/>
                            </div>
                            <div className="adress__part ship-street">
                                <label htmlFor="street">Улица:</label>
                                <input type="text" name="street" id="street" required/>
                            </div>
                            <div className="adress__part ship-house">
                                <label htmlFor="house">Дом:</label>
                                <input type="text" name="house" id="house" required/>
                            </div>
                            <div className="adress__part ship-apartments">
                                <label htmlFor="apartments">Квартира:</label>
                                <input type="text" name="apartments" id="apartments" required/> 
                            </div>
                            <div className="adress__part ship-index">
                                <label htmlFor="index">Индекс:</label>
                                <input type="text" name="index" id="index" required/> 
                            </div>
                        </div>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default CartPage;