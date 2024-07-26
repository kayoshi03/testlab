import style from "../scss/navitem.module.scss"
interface INavitem {
    title: string
    url: string
}

export const Navitem = ({title, url}:INavitem) => {
    return(
        <li className={style.li}><a className={style.item} href={url}>{title}</a></li>
    )
}