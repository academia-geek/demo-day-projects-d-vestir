import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { DivForm, MsgError, MsgSuccess } from './styles/NewsLetter.Styled';
import { ButtonNews } from './principal/Principal.Styled'

const NewsLetter = () => {
    const [sendEmail, setSendEmail] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email('E-mail inválido').required('Es necesario un ingresar un e-mail')
        }),

        onSubmit: (values) => {
            console.log(values)
            setSendEmail(true)
            setTimeout(() => setSendEmail(false), 3000);
        },

    })

    return (
        <DivForm>
            <form onSubmit={formik.handleSubmit}>
                <h3>¿Quieres estar al tanto de las últimas novedades?</h3>
                <p>Semanalmente enviamos correos informativos.</p>
                <label htmlFor='email'></label>
                <input
                    id='email'
                    name='email'
                    type='text'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.email}
                    placeholder='Ingrese su email'

                />
                <div>
                    <ButtonNews type='submit' disabled={!formik.isValid || !formik.dirty}>Enviar</ButtonNews>
                    {/* <Reset type='reset'>Reset</Reset> */}
                </div>
                {formik.touched.email && formik.errors.email ? <MsgError>{formik.errors.email}</MsgError> : null}
                {sendEmail && <MsgSuccess>E-mail enviado con éxito!</MsgSuccess>}
            </form>
        </DivForm>
    )
}

export default NewsLetter