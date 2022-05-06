import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload';
import { listUsers, userAddAsincrono } from '../actions/actionUsers';
import { ListUsers } from './ListUsers';

import { DivForm } from './styles/Contenido.Styled';
import { Form } from 'react-bootstrap';

const Contenido = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    cedula: '',
    nombres: '',
    username: '',
    tarjeta: '',
    celular: '',
    direccion: '',
    email: '',
    imagen: ''
  })

  let { cedula, nombres, username, tarjeta, celular, direccion, email, imagen } = values;

  const handleRegistro = e => {
    e.preventDefault();
    dispatch(userAddAsincrono(cedula, nombres, username, tarjeta, celular, direccion, email, imagen));
    reset();
  }

  const handleFile = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then(res => {
        imagen = res
        console.log(res);
      })
      .catch(error => {
        console.log(error.message);
      })

  }

  useEffect(() => {
    dispatch(listUsers()) // eslint-disable-next-line
  }, [])



  return (
    <>
      <div>
        <DivForm>
          <Form onSubmit={handleRegistro}>
            <h1>Completa tu perfil</h1>
            <p>Para comprar o vender debes completar toda la información.</p>
            <div className="form-group">
              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text" name="cedula"
                  id="cedula"
                  placeholder='Cédula'
                  value={cedula}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="nombres"
                  id="nombres"
                  placeholder='Nombres'
                  value={nombres}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  id="username"
                  placeholder='Username'
                  value={username}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="tarjeta"
                  id="tarjeta"
                  placeholder='Tarjeta de Crédito xxx - xxx - xxx'
                  value={tarjeta}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="celular"
                  id="celular"
                  placeholder='(+ 57)'
                  value={celular}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="text"
                  name="direccion"
                  id="direccion"
                  placeholder='Dirección'
                  value={direccion}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  placeholder='E-mail'
                  value={email}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <br />
              <div className="form-group col-md-4">
                <input
                  className="form-control"
                  id="fileSelector"
                  type="file"
                  name="file"
                  onChange={handleFile}
                />
              </div>
              <br />
              <div>
                <button
                  type='submit'>Guardar</button>
              </div>
            </div>
          </Form>
        </DivForm>
      </div>
      <ListUsers />
    </>
  )
}

export default Contenido