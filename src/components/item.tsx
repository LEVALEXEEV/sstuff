import { Link } from "react-router-dom";
import { ItemTypes } from "../const";

type ItemProps = {
    previewImage: string,
    price: number,
    id: string,
    title: string,
    type: ItemTypes
  };

function Item({previewImage, type, id, title, price}: ItemProps): JSX.Element {
    return (
        <article className="stuff__card">
            <div className="card__image-wrapper">
                <Link to={`/item/${id}`}>
                    <img className="card__image" src={'img/items/'+ previewImage} width="300"  alt="Place image" />
                </Link>
            </div>
            <div className="card__info">
                <p className="card__type">{type}</p>
                <h2 className="card__name">
                    <Link to={`/item/${id}`}>{title}</Link>
                </h2>
                <div className="card__price-wrapper">
                    <div className="card__price">
                        <b className="card__price-value">₽{price}</b>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Item
