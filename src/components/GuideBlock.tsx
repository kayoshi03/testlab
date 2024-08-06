import style from "../scss/guide.module.scss"
import {GuideItem} from "./GuideItem.tsx";
import test from "../assets/secure.svg"
export const GuideBlock = () => {
    return(
        <div id="guide" className={style.guide}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Как это работает</h2>
                    <div className={style.list}>
                        <GuideItem src={"src/assets/waiting.svg"} title={"Прочитай задание внимательно"} desc={"Думаю у тебя не займет это больше двух-трех минут"}/>
                        <GuideItem src={"src/assets/delivery-truck.svg"} title={"Изучи весь макет заранее"} desc={"Подумай как это будет работать на разных разрешениях и при скролле"}/>
                        <GuideItem src={"src/assets/secure.svg"} title={"Сделай хорошо"} desc={"Чтобы мы могли тебе доверить подобные задачи в будущем"}/>
                        <GuideItem src={"src/assets/money-bags.svg"} title={"Получи предложение"} desc={"Ну тут все просто, не я придумал правила, но думаю так и будет)))"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}