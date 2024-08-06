import React, {useState} from "react";
import {BurgerShow} from "./BurgerShow.tsx";
import style from "../scss/header.module.scss";

export const BurgerMenu = ({show, setShow}) => {

    return (
        <React.Fragment>
        <div onClick={() => setShow(!show)} className={style.burger}>
            {
                show ?
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.515625" y="16.071" width="22" height="2" transform="rotate(-45 0.515625 16.071)"
                              fill="#191C1F"/>
                        <rect x="1.92969" y="0.514771" width="22" height="2" transform="rotate(45 1.92969 0.514771)"
                              fill="#191C1F"/>
                    </svg>
                    :
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="22" height="2" fill="white"/>
                        <rect y="10" width="22" height="2" fill="white"/>
                    </svg>
            }
        </div>
            {
                show ? <BurgerShow setShow={setShow}/> : <></>
            }
        </React.Fragment>
    )
}