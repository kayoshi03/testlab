import style from "../scss/reviews.module.scss"
import {Review} from "./Review.tsx";
export const ReviewsBlock = () => {
    return (
        <div className={style.reviews}>
            <div className="container">
                <div className={style.wrapper}>
                    <Review/>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </div>
        </div>
    )
}