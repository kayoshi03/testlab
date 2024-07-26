import "../scss/navbar.module.scss"
import {Navitem} from "./Navitem.tsx";
export const Navbar = () => {
    return(
        <nav>
            <Navitem title={"Как это работает"} url={"#guide"}/>
            <Navitem title={"3-й блок"} url={"#third"}/>
            <Navitem title={"Вопросы и ответы"} url={"#req"}/>
            <Navitem title={"Форма"} url={"#form"}/>
        </nav>
    )
}