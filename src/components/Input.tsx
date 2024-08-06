import style from "../scss/input.module.scss"
interface IInput {
    type: "text" | "number" | "email"
    placeholder: string
    required: boolean
    name: string
}

export const Input = ({type, placeholder, required, pattern, minLength, maxLength, name, register, keyEvent}:IInput) => {
    return(
        <label className={style.input}>
            <input {...register(name, { required, pattern, minLength, maxLength})}
                   pattern={pattern} className="p18"
                   required={required} type={type}
                   placeholder={placeholder}
                    onKeyPress={keyEvent}
            />
        </label>
    )
}