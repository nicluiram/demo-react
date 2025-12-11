import React, { useState } from 'react'

function MyForm() {
    const enableEvent = (evento) => {
        console.log("Evento sobre input", evento.type);
    }
    const enableInput = (evento) => {
        evento.stopPropagation()
        console.log("Evento input activado", evento.type);
    }
    const enableForm = (evento) => {
        evento.stopPropagation()
        console.log("Evento form activado", evento.type);
    }
    const [formData, setFormData] = useState({
        username: '',
        email: 'ejemplo@mymail.com',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: ''
    })


    const procesarCambio = (evento) => {
        const { name, value } = evento.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        })
        )
        setFormErrors((prevFormErrors) => ({
            ...prevFormErrors,
            [name]: '',
        }))
    }


    const processSubmit = (evento) => {
        evento.preventDefault()
        console.log(formData)
        const newFormErrors = {};

        if (formData.username.trim() === '') {
            newFormErrors.username = "El campo userName es vacio"
        }
        if (formData.email.trim() === '') {
            newFormErrors.email = "El campo email es vacio"
        }
        if (formData.password.trim() === '') {
            newFormErrors.password = "El campo password es vacio"
        }

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors)
        }
    }

    return (
        <>
            <div className='container' onSubmit={processSubmit}>
                <form autoComplete='off' className='box'>
                    <div>
                        <label htmlFor='username'>Usuario:</label>
                        <input type='text' id='username' name='username' value={formData.username} onChange={procesarCambio} />
                    </div>
                    {formErrors.username && <span className='error'>{formErrors.username}</span>}
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' id='email' name='email' value={formData.email} onChange={procesarCambio} />
                    </div>
                    {formErrors.email && <span className='error'>{formErrors.email}</span>}
                    <div>
                        <label htmlFor='password' onClick={enableEvent}>Password:</label>
                        <input type='password' id='password' name='password' value={formData.password} onChange={procesarCambio} />
                    </div>
                    {formErrors.password && <span className='error'>{formErrors.password}</span>}
                    <button type='submit'>Enviar</button>
                </form>
            </div>
        </>

    )
}

export default MyForm