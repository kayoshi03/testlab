import {Checkbox} from "./Checkbox.tsx";
import {Input} from "./Input.tsx";
import {useForm} from "react-hook-form";

export const Form = () => {
    const {handleSubmit, register} = useForm()
    const submit = (data) => console.log(data)
    const onKeyPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input register={register} name={"name"}
                   type={"text"} placeholder={"Имя"}
                   required={true}
            />
            <Input register={register}  name={"telephone"}
                   type={"text"} placeholder={"Телефон"}
                   required={true} pattern="\d*"
                    keyEvent={onKeyPress}
                   minLength={11}
                   maxLength={11}
            />
            <Checkbox register={register} text={"Согласен, отказываюсь"}/>
            <button type="submit" className="btn">Отправить</button>
        </form>
    )
}