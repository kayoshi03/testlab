import style from "../scss/slider.module.scss"
export const SliderBlock = () => {
    return(
        <div className={style.slide}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Отзывы</h2>
                    <div className={style.slider}>
                        <button className={style.prev}>prev</button>
                        <div className={style.wrapper}>
                            <div className={style.item}>

                            </div>
                            <div className={style.item}>

                            </div>
                            <div className={style.item}>

                            </div>
                            <div className={style.item}>

                            </div>
                        </div>
                        <button className={style.next}>next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}