import { Link } from "react-router-dom";
import { ItemType } from "../types/item";

function Item({previewImages, type, article, title, price}: ItemType): JSX.Element {
    return (
        <article className="stuff__card glass_clr">
            <div className="card__image-wrapper">
                <Link to={`/sstuff/item/${article}`}>
                    <img className="card__image" src={'/sstuff/img/items/'+ previewImages[0]} width="300"  alt="Place image" />
                </Link>
            </div>
            <div className="card__info">
                <p className="card__type">{type}</p>
                <h2 className="card__name">
                    <Link to={`/sstuff/item/${article}`}>{title}</Link>
                </h2>
                <div className="card__price">
                    <i className="card__price-value">{price}</i>
                </div>
            </div>
        </article>
    )
}

export default Item
