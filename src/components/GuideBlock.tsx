import style from "../scss/guide.module.scss"
import {GuideItem} from "./GuideItem.tsx";
export const GuideBlock = () => {
    return(
        <div id="guide" className={style.guide}>
            <div className="container">
                <div className={style.wrapper}>
                    <h2>Как это работает</h2>
                    <div className={style.list}>
                        <GuideItem title={"Прочитай задание внимательно"} desc={"Думаю у тебя не займет это больше двух-трех минут"}/>
                        <GuideItem title={"Изучи весь макет заранее"} desc={"Подумай как это будет работать на разных разрешениях и при скролле"}/>
                        <GuideItem title={"Сделай хорошо"} desc={"Чтобы мы могли тебе доверить подобные задачи в будущем"}/>
                        <GuideItem title={"Получи предложение"} desc={"Ну тут все просто, не я придумал правила, но думаю так и будет)))"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}