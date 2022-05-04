import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, listProduct, deleteProduct, editProduct } from '../actions/actionSell'
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload'
import { ButtonDele, ButtonEdit } from './styles/ListUser.Styled';

const Vender = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)

  const [error, setError] = useState(false)
  const [editForm, setEditForm] = useState(false)

  const [values, handleInputChange, reset, setValues] = useForm({
    producto: '',
    talla: '',
    precio: '',
    imagen: '',
    descripcion: '',
    codigo: ''
  })

  let { producto, talla, precio, imagen, descripcion, codigo } = values

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct(producto, talla, precio, imagen, descripcion, codigo))
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
    dispatch(listProduct())
  }, [])

  const handleEdit = (products) => {
    dispatch(editProduct(products.codigo, products))
    setEditForm(true)
    setValues({
      ...products
    })

  }

  const handleSave = (products, codigo) => {
    dispatch(editProduct(products.codigo, values, codigo))
    reset()
    setEditForm(false)

  }

  return (
    <div className="container mt-5 mb-5">
      <h1>Productos</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h3 className="text-center mt-5">Lista de productos a Vender</h3><br />
          {
            products.map((data, index) => (
              <div className="card mb-5" style={{ width: "18rem" }} key={index}>
                <img src={data.img} alt={data.producto} />
                <img src={data.img} style={{ width: "40px", height: '40px' }} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{data.producto}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Talla: {data.talla}</h6>
                  <h6 className="card-subtitle mb-2 text-muted">Referencia: #{data.codigo}</h6>
                  <p>Precio: ${data.precio}</p>
                  <p className="card-text">Descripción: {data.descripcion}.</p>
                  <ButtonDele
                    onClick={() => dispatch(deleteProduct(data.codigo))}>
                    Eliminar
                  </ButtonDele>
                  <ButtonEdit
                    onClick={() => handleEdit(data)}
                  >Editar
                  </ButtonEdit>
                </div>
              </div>
            ))
          }

        </div>
        <div className="col-4">
          <h3 className="text-center mt-5">Agrega todos los productos que quieras Vender</h3>
          <p>** Las imágenes deben ser de menos de 16 KB para poder visualizarse correctamente.</p><br />
          {
            error &&
            <div class="alert alert-danger" role="alert">
              Los campos son obligatorios
            </div>
          }

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
              className="form-control"
              onChange={handleFile}
            />
            <input
              type="text"
              name="codigo"
              className="form-control gap-2"
              placeholder='Valor númerico como referencia.'
              value={codigo}
              onChange={handleInputChange}
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
            <div className="d-grid gap-2 mx-auto ">
              {
                !editForm ?
                  <button
                    className="btn btn-info"
                    type="submit" >
                    Enviar
                  </button>
                  :
                  <button
                    className='btn btn-warning'
                    type='submit'
                    onClick={handleSave}>
                    Guardar
                  </button>
              }

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vender