import style from "../scss/header.module.scss"
import {Navbar} from "./Navbar.tsx";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={style.wrapper}>
                    <a href={"#"} className="logotype">
                        <h5 className="white">testLab</h5>
                    </a>
                    <Navbar/>
                </div>
            </div>
        </header>
    )
}