import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation,A11y} from "swiper/modules";
import {CardReviews} from "./CardReviews.tsx";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "swiper/scss/a11y";
import style from "../scss/slider.module.scss"
import "../scss/swiper.scss"

const reviews = [
    {
        id: 12,
        name: "Константинов Михаил Павлович",
        url: "https://furman.top/uploads/posts/2023-08/1692275213_furman-top-p-kotenok-s-bantikom-oboi-krasivo-24.jpg",
        city: "Челябинск",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу."
    },
    {
        id: 14,
        name: "Воротнев Андрей",
        url: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png",
        city: "Южноуральск",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу."
    },
    {
        id: 19,
        name: "Марина",
        url: "https://w-dog.ru/wallpapers/3/18/384737186902234/devushka-vzglyad-pled-kruzhka.jpg",
        city: "Санк-Петербург",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу."
    },
    {
        id: 13,
        name: "Владимир Анатольевич",
        url: "https://www.rabotakurgan.ru/uploads/6cc44a0bx5cc13ba8.jpg",
        city: "Москва",
        text: "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу."
    }
]

export const SliderBlock = () => {
    const [slider, setSlider] = useState(null)

    return(
        <div className={style.slide}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Отзывы</h2>
                    <div className={style.slider}>
                        <button onClick={() => slider.slidePrev()}>
                            <svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.33811C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2048 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2048 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z" fill="#C2C8CD"/>
                            </svg>
                        </button>
                        <Swiper
                            spaceBetween={32}
                            navigation={false}
                            loop={true}
                            modules={[Pagination, Navigation, A11y]}
                            pagination={{clickable: true}}
                            slidesPerView={3}
                            onSwiper={(swiper) => setSlider(swiper)}
                        >
                            {
                                reviews.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <CardReviews name={item.name} url={item.url} city={item.city} id={item.id} text={item.text}/>
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                        <button onClick={() => slider.slideNext()}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.39143 29.724C8.26408 29.847 8.1625 29.9941 8.09262 30.1568C8.02275 30.3194 7.98596 30.4944 7.98443 30.6714C7.98289 30.8485 8.01662 31.024 8.08366 31.1879C8.1507 31.3518 8.24971 31.5006 8.3749 31.6258C8.50009 31.751 8.64896 31.85 8.81282 31.9171C8.97668 31.9841 9.15226 32.0178 9.32929 32.0163C9.50633 32.0148 9.68129 31.978 9.84397 31.9081C10.0066 31.8382 10.1538 31.7367 10.2768 31.6093L21.1728 20.7133C22.4209 19.4623 23.1219 17.7672 23.1219 16C23.1219 14.2328 22.4209 12.5377 21.1728 11.2866L10.2768 0.39064C10.0253 0.147762 9.68849 0.0133699 9.33889 0.0164078C8.9893 0.0194457 8.65488 0.159671 8.40767 0.406882C8.16046 0.654093 8.02023 0.988509 8.01719 1.3381C8.01416 1.6877 8.14855 2.0245 8.39143 2.27597L19.2874 13.172C20.0373 13.9221 20.4586 14.9393 20.4586 16C20.4586 17.0606 20.0373 18.0779 19.2874 18.828L8.39143 29.724Z" fill="#C2C8CD"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}