import {Accardion} from "./Accardion.tsx";
import style from "../scss/accardion.module.scss"

export const AccardionBlock = () => {
    return(
        <div id="req" className={style.faq}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Вопросы и ответы</h2>
                    <Accardion/>
                </div>
            </div>
        </div>
    )
}