import { Link } from "react-router-dom";
import { ItemType } from "../types/item";

function Item({previewImages, type, article, title, price}: ItemType): JSX.Element {
    return (
        <Link to={`/sstuff/item/${article}`} className="stuff__card">
            <div className="card__image-wrapper">
                <img className="card__image" src={'/sstuff/img/items/'+ previewImages[0]} width="300"  alt="Place image" />
            </div>
            <div className="card__info">
                <p className="card__type">{type}</p>
                <h2 className="card__name">{title}</h2>
                <div className="card__price">{price} руб</div>
            </div>
        </Link>
    )
}

export default Item
