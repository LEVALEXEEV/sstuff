import { ItemType } from "../types/item"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";

type SliderProps = {
    item: ItemType | undefined
}

function Slider({item}: SliderProps) {
    const imgWidth = (window.innerWidth < 540)? window.innerWidth - 20 : 500;
    const bulletWidth = (window.innerWidth < 460)? 40 : 60;
    const indexes = [];
    const path = '/sstuff/img/items/';
    for (var index in item?.previewImages) {indexes.push(Number(index)+1);}
    return (
        <div className="item__part slider-part" >
            <div className="slider__mask">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween = {10}
                    slidesPerView = {1}
                    navigation
                    pagination = {{
                        clickable: true,
                        renderBullet: function(index, className) {
                            return `<div class="${className}"><img class="pagination-bullet" src=${path + item?.previewImages[index]} width="${bulletWidth}" /></div>`;
                        }
                    }}
                >
                    {indexes.map((i) => (
                        <SwiperSlide key={i}>
                            <div className="slide__container" >
                                <img className="item_img" src={"/sstuff/img/items/" + item?.previewImages[i-1]} width={imgWidth}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default Slider;