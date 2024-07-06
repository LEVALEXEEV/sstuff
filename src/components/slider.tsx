import { useState } from "react";
import { useAppSelector } from "../hooks";
import { ItemType } from "../types/item"

type SliderProps = {
    item: ItemType | undefined
}

function Slider({item}: SliderProps) {
    const [activeImg, setActiveImg] = useState(1);
    const device: boolean = useAppSelector((state) => state.device);
    const indexes = [];
    for (var index in item?.previewImages) {indexes.push(Number(index)+1);}
    return (
        <div className="item__part item-img-slider__wrap" >
            <div className="wrapper">
                {indexes.map((i) => (<input key={item?.article + `${i}`} type="radio" name="point" id={"slide" + `${i}`} defaultChecked={i == 1} onChange={() => setActiveImg(i)}></input>))}
                <div className="slider">
                    {indexes.map((i) => (<div key={item?.article + `${i}`} className={"slides slide" + `${i}`}><img src={"img/items/" + item?.previewImages[i-1]}/></div>))}
                </div>
                <div className="controls">
                    {indexes.map((i) => (<label key={item?.article + `${i}`} htmlFor={"slide" + `${i}`} style={(device)? {width: '40px', height: '40px'} : {width: '60px', height: '60px'}} onClick={() => setActiveImg(i)}><img src={"img/items/" + item?.previewImages[i-1]}/></label>))}
                </div>
            </div>
            <label className="back__button" htmlFor={"slide" + (activeImg-1)}><img src="img/arrow-prev-icon.svg" width={35}/></label>
            <label className="forward__button" htmlFor={"slide" + (activeImg+1)}><img src="img/arrow-next-icon.svg" width={35}/></label>
        </div>
    )
};

export default Slider;