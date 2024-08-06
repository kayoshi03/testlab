import style from "../scss/guide.module.scss"
interface IGuideItem {
    title: string
    desc: string
    src: string
}
export const GuideItem = ({title, desc, src}:IGuideItem) => {
    return (
        <div className={style.item}>
            <img src={src} alt={""}/>
            <div className={style.text}>
                <h6 className="bold">{title}</h6>
                <p className="p14">{desc}</p>
            </div>
        </div>
    )
}