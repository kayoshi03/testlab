import style from "../scss/header.module.scss"
import {Navbar} from "./Navbar.tsx";
import {BurgerMenu} from "./BurgerMenu.tsx";
import {useState} from "react";

export const Header = () => {
    const [show, setShow] = useState(false)
    return (
        <header>
            <div className="container">
                <div className={style.wrapper}>
                    <a href={"#"} className={style.logotype}>
                        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="12" r="12" fill="#ECEFF2"/>
                            <circle cx="12" cy="12" r="12" fill="#2A6CEA"/>
                        </svg>
                        <h5 className={show ? "" : "white"}>testLab</h5>
                    </a>
                    <Navbar/>
                    <BurgerMenu setShow={setShow} show={show}/>
                </div>
            </div>
        </header>
    )
}