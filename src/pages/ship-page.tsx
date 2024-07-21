import Header from "../components/header";
import Footer from "../components/footer";
import Background from "../components/background";
import { Link } from "react-router-dom";



function ShipPage(): JSX.Element {
  return (
    <>
      <Header />
      <section className="main__wrap ship__main__wrap">
        <div className='main'>
            <h2 className="page__header">SHIP</h2>
            <div className="ship-inf__wrap">
                <h3>Сроки:</h3>
                <ul>
                    <li>Доставка по РФ 1-ым классом 500 руб.</li>
                    <li>Мировая Доставка за пределы РФ 1-ым классом 1500 руб.</li>
                </ul>
                <h3>Информация:</h3>
                <p>
                    ВАЖНО! После оплаты, заказ отправляется на изготовление, после чего отправляется к вам (под каждой вещью, которая находится в продаже написаны временные рамки). Если товар уже в наличии, под кнопкой «BUY NOW» так же будет написана эта информация и сроки отправки.
                    Как правило, отправка заказов осуществляется в течение 4-14 дней (иногда бывают исключения, информация о которых написана под каждым товаром)
                    По всем остальным вопросам писать в Телеграмме <Link to={'tg://resolve?domain=swimming_stuff'}>@swimmingstuff</Link>
                </p>
            </div>
            <h2 className="page__header">RETURN</h2>
            <div className="return-inf__wrap">
                <h3>Политика возврата:</h3>
                <p>
                Возврат товара возможен в течение 7 дней с момента получения его покупателем! Товар должен иметь первоначальный внешний вид.
                Если вам не подошел размер, возможен обмен, если этот товар есть в наличии на складе, так же замена на другую вещь по желанию.
                </p>
            </div>
        </div>
        <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
      </section>
      <Footer/>
    </>
  );
}

export default ShipPage;