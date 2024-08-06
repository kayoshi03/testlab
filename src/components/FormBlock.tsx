import {Form} from "./Form.tsx";
import style from "../scss/form.module.scss"

export const FormBlock = () => {
    return(
        <div id="form" className={style.form}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Отправь форму</h2>
                    <Form/>
                </div>
            </div>
        </div>
    )
}