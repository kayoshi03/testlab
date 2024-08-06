import style from "../scss/slider.module.scss"
import test from "../assets/testProfile.jpg"

export interface IReviews {
    id: number
    name: string
    city: string
    url: string
    text: string
}
export const CardReviews = ({name, url, city, text}:IReviews) => {
    return (
        <div className={style.card}>
            <div className={style.content}>
                <div className={style.profile}>
                    <img src={url} alt={"profile"}/>
                    <div className={style.text}>
                        <h6>{name}</h6>
                        <p className="p12">{city}</p>
                    </div>
                </div>
                <p className="p14">
                    {text}
                </p>
            </div>
        </div>
    )
}