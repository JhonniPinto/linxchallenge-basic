import React, { useState } from 'react'
import './Newsletter.css'

import { usePost } from '../../rest/newsletter'
import validateForm from './utils/validateForm'

const baseURL = 'http://testing/test.com'

const Newsletter = () => {
    const [data, post, clean] = usePost(baseURL)
    const [form, setForm] = useState({name: '', email: ''})
    const [err, setErr] = useState([])

    const settingForm = field => e => {
        setForm({...form, [field]: e.target.value})
    }

    const submitForm = () => {
        const fieldErr = validateForm(form)
        if (fieldErr.length === 0) {
            post(form)
            setErr(fieldErr)
            setTimeout(() => {
                setForm({name: '', email: ''})
                clean()
            }, 2000)
        }
        setErr(fieldErr)
    }

    return <section className='newsletter-container'>
        <h4 className='news-header'>Compartilhe a novidade</h4>
        <p className='paragraph'>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <form className='form'>
            <div className='forms-control'>
                <div className='form-control'>
                    <label>Nome do seu amigo:</label>
                    <input value={form.name} onChange={settingForm('name')} type='text' />
                    <small className='newsletter-form-feedback'>
                        { err.indexOf('name') >= 0 && 
                            'Preencher com, no mínimo, 2 caracteres.' 
                        }
                    </small> 
                </div>
                <div className='form-control'>
                    <label>E-mail:</label>
                    <input value={form.email} onChange={settingForm('email')} type='email' />
                    <small className='newsletter-form-feedback'>
                        { err.indexOf('email') >= 0 && 
                            'Preencher com formato de e-mail padrão.' 
                        }
                    </small> 
                </div>
            </div>
            <small className='newsletter-post-feedback'>
                {data.name && `Novidades compartilhadas com ${data.name}.`}
            </small>
            <button onClick={submitForm} type='button'>Enviar agora</button>
        </form>
    </section>
}

export default Newsletter