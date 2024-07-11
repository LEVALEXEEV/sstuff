import { ItemType } from "../types/item"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { useAppSelector } from "../hooks";

type SliderProps = {
    item: ItemType | undefined
}

function Slider({item}: SliderProps) {
    const indexes = [];
    const path = '/sstuff/img/items/';
    const device: boolean = useAppSelector((state) => state.device);
    const controlsSize = (device)? '40px' : '60px';
    for (var index in item?.previewImages) {indexes.push(Number(index)+1);}
    return (
        <div className="item__part item-img-slider__wrap" >
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween = {10}
                slidesPerView = {1}
                navigation
                pagination = {{
                    clickable: true,
                    renderBullet: function(index, className) {
                        return `<div class="${className}" style="width:${controlsSize}; height:${controlsSize}"><img class="pagination-bullet" src=${path + item?.previewImages[index]} style="width:${controlsSize}"/></div>`;
                    }
                }}
            >
                {indexes.map((i) => (
                    <SwiperSlide key={i}>
                        <div className="slide__container" >
                            <img src={"/sstuff/img/items/" + item?.previewImages[i-1]} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
};

export default Slider;