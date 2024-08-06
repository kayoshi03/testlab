import {useSwiper} from "swiper/react";

export const ButtonNext =() => {
    const swiper = useSwiper();
    console.log(swiper)
    return(
        <button onClick={() => swiper.slideNext()}>next</button>
    )
}