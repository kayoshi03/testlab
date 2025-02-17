import style from "../scss/header.module.scss"

const data = [
    {
        title: "Как это работает",
        url: "#guide"
    },
    {
        title: "3-й блок",
        url: "#thrid"
    },
    {
        title: "Вопросы и ответы",
        url: "#req"
    },
    {
        title: "Форма",
        url: "#form"
    }
]

export const BurgerShow = ({setShow}) => {
    return(
        <div className={style.menu}>
            <div className={style.list}>
                {
                    data.map((item) => (
                        <a onClick={() => setShow(false)} href={item.url} className={style.item}>
                            <p className="p18">{item.title}</p>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.40012 17.293C9.21262 17.4807 9.10733 17.7351 9.10742 18.0004C9.10752 18.2657 9.21298 18.52 9.40062 18.7075C9.58826 18.895 9.84271 19.0003 10.108 19.0002C10.3732 19.0001 10.6276 18.8947 10.8151 18.707L15.4001 14.121C15.9625 13.5585 16.2785 12.7955 16.2785 12C16.2785 11.2045 15.9625 10.4416 15.4001 9.87904L10.8111 5.29304C10.6207 5.12088 10.3714 5.02853 10.1148 5.03512C9.85817 5.04171 9.61391 5.14673 9.43259 5.32844C9.25127 5.51014 9.14677 5.75462 9.14073 6.01124C9.13468 6.26787 9.22756 6.517 9.40012 6.70704L13.9861 11.293C14.1736 11.4806 14.2789 11.7349 14.2789 12C14.2789 12.2652 14.1736 12.5195 13.9861 12.707L9.40012 17.293Z"
                                    fill="#83898F"/>
                            </svg>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}