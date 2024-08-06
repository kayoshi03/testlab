import {AccardionItem} from "./AccardionItem.tsx";
import style from "../scss/accardion.module.scss"
export const Accardion = ({list}) => {
    return (
        <div className={style.list}>
            {
                list.map((item, index) => (
                    <AccardionItem key={index} question={item.quest} answer={item.answer}/>
                ))
            }
        </div>
    )
}