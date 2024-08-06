import style from "../scss/thrid.module.scss"
import image from "../assets/thrid.png"
export const ThridBlock = () => {
    return (
        <div id="third" className={style.thrid}>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.text}>
                        <h3>Круто, ты дошел до третьего блока</h3>
                        <p className="p16">
                            63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
                            <br/>
                            <br/>
                            Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
                        </p>
                    </div>
                    <img alt="третий блок" src={image} loading={"lazy"}/>
                </div>
            </div>
        </div>
    )
}