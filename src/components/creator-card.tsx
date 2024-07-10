import { useAppSelector } from "../hooks";
import { CreatorType } from "../types/creator";

function CreatorCard({name, description, img}: CreatorType): JSX.Element {
    const device = useAppSelector(state => state.device);
    return (
        <div className={(device)?'creator-card__wrap creator-card__wrap-mobile':"creator-card__wrap"}>
            <h3>{name}</h3>
            <div className="pic__wrap">
                <img src={img} alt="###" />
            </div>
            <input type="checkbox" id={`creator_${name}`}/>
            <div className="author-text-description__wrap">
                <p>{description}</p>  
            </div>
            <label className="arrow__wrap" htmlFor={`creator_${name}`}><img className="dwn-arrow" src="/sstuff/img/arrow-down.svg" width="40px" /></label>
        </div>
    )
}

export default CreatorCard