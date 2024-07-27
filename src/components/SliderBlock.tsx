import style from "../scss/slider.module.scss"
import {Swiper, SwiperSlide} from "swiper/react";
export const SliderBlock = () => {
    return(
        <div className={style.slide}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Отзывы</h2>
                    <Swiper>
                        <SwiperSlide>SLide1</SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}