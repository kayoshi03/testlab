import style from "../scss/mainblock.module.scss"
export const MainBlock = () => {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h1 className="white">Говорят, никогда не поздно сменить профессию</h1>
                    <p className="p18 white">Сделай круто тестовое задание и у тебя получится</p>
                </div>
                <button className="whBtn">Проще простого!</button>
            </div>
        </div>
    )
}