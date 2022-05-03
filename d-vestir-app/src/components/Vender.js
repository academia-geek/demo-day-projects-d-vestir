import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, listProduct, deleteProduct, editProduct } from '../actions/actionSell'
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload'

const Vender = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)

  const [error, setError] = useState()
  const [editForm, setEditForm] = useState()

  const [values, handleInputChange, reset] = useForm({
    id:'',
    producto: '',
    talla: '',
    precio: '',
    imagen: '',
    descripcion: '',
  })

  let { id,producto, talla, precio, imagen, descripcion } = values

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleAgregar = () => {
    dispatch(addProduct(producto, talla, precio, imagen, descripcion))
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



  return (
    <div className="container mt-5">
      <h1>Productos</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h3 className="text-center">Lista de productos a Vender</h3>
          <ul className='list-group'>
            {
              products.map((data, index) => (
                <li className="list-group-item" key={index}>
                  <span>{data.producto}</span>
                  <span>{data.talla}</span>
                  <span>{data.precio}</span>
                  <span><img src={data.imagen} alt=''/></span>
                  <span>{data.descripcion}</span>
                  <button
                    className="btn btn-warning btn-sm float-end me-1"
                  >
                    Editar
                  </button>
                  <button className="btn btn-danger btn-sm float-end me-1"
                  >
                    Eliminar
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h3 className="text-center">Agrega todos los productos que quieras Vender</h3>
          {/* {
            error &&
            <div class="alert alert-danger" role="alert">
              Los campos son obligatorios
            </div>
          } */}

          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="text"
              name="producto"
              className="form-control"
              placeholder="Nombre del producto"
              value={producto}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="talla"
              className="form-control"
              placeholder="Talla"
              value={talla}
              onChange={handleInputChange}

            />
            <input
              type="text"
              name="precio"
              className="form-control"
              placeholder="Precio"
              value={precio}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="imagen"
              onChange={handleFile}
            />
            <textarea
              name="descripcion"
              className="form-control mt-2"
              autoComplete="of"
              placeholder='Menciona las características de tu producto.'
              value={descripcion}
              onChange={handleInputChange}
            >
            </textarea>
            <div className="d-grid gap-2 mx-auto">
              {/* {
                !editForm
                  ?
                  <button
                    className="btn btn-dark"
                    type="submit" >Enviar</button>
                  :
                  <button
                    className="btn btn-dark"
                    type="submit">Guardar</button>

              } */}
              <button
                className="btn btn-info"
                type="submit" onClick={handleAgregar}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vender