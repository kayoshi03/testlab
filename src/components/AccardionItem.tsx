import style from "../scss/accardion.module.scss"
import {useRef, useState} from "react";
export const AccardionItem = ({question, answer}) => {
    const [show, setShow] = useState(false)
    const handlerShow = () => {
        setShow((prev) => !prev)
    }
    const contentEl = useRef();

    return(
        <li className={style.accord_item}>
            <div className={style.question} onClick={handlerShow}>
                <p className="p18 bold">
                    {question}
                </p>
                <span>
                    <svg style={show ? {transform: "rotate(45deg)"}: {}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"
                        fill="#191C1F"/>
                    <circle cx="12" cy="12" r="11" stroke="#191C1F" strokeWidth="2"/>
                    </svg>
                </span>
            </div>
            <div ref={contentEl} style={
                show
                    ? {height: contentEl.current.scrollHeight}
                    : {height: "0px"}
                }
                 className={`${style.answer_wrapper} `}>
                <p className="p18">
                    {answer}
                </p>
            </div>
        </li>
    )
}