import style from "../scss/header.module.scss"
import {Navbar} from "./Navbar.tsx";

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={style.wrapper}>
                    <a href={"#"} className={style.logotype}>
                        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="12" r="12" fill="#ECEFF2"/>
                            <circle cx="12" cy="12" r="12" fill="#2A6CEA"/>
                        </svg>
                        <h5 className="white">testLab</h5>
                    </a>
                    <Navbar/>
                </div>
            </div>
        </header>
    )
}