import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import Input from "../input"
import Button from "../button"

type UserFormState = {
    name: string,
    lastname: string
}

interface UserFormProps {
    handleSubmit: (user: UserFormState) => void;
}

export default function UserForm({handleSubmit}: UserFormProps) {
    const [form, setForm] = useState<UserFormState>({
        name: '',
        lastname: ''
    })

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const name = e.target.name as keyof UserFormState
        setForm({
            ...form,
            [name] : e.target.value 
        })

      }
    
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        handleSubmit(form)

        setForm({
            name: '',
            lastname: ''
        })
      }
    return (
        <>
            <Input value={form.name} name='name' placeholder='Name' handleChange={handleChange}/>
            <Input value={form.lastname} name='lastname' placeholder='Lastname' handleChange={handleChange}/>
            <Button handleClick={handleClick}>Hola</Button>
        </>
    )
}