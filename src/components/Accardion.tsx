import {AccardionItem} from "./AccardionItem.tsx";
import style from "../scss/accardion.module.scss"
export const Accardion = () => {
    return (
        <div className={style.list}>
            <AccardionItem/>
            <AccardionItem/>
            <AccardionItem/>
            <AccardionItem/>
        </div>
    )
}