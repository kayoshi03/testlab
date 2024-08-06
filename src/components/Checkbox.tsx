import style from "../scss/checkbox.module.scss"
import {useState} from "react";
export const Checkbox = ({text, register}) => {
    const [checked, setChecked] = useState(false)
    const handler = () => {
        setChecked(!checked)
    }
    return(
        <label className={style.checkbox}>
            <input onClick={handler} type="checkbox" {...register("isActive")}/>
            <span  className={checked ? style.check : ""}></span>
            <p>{text}</p>
        </label>
    )
}