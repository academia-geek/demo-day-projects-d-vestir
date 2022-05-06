import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, listProduct, deleteProduct } from '../actions/actionSell'
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload'
import { ButtonDele } from './styles/ListUser.Styled';

const Vender = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products)

  const [values, handleInputChange, reset] = useForm({
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
    dispatch(listProduct())  // eslint-disable-next-line
  }, [])

  return (
    <div className="container mt-5 mb-5">
      <h1>Productos</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h3 className="text-center mt-5">Lista de productos a Vender</h3><br />
          {
            // style="max-width: 540px;"
            products.map((data, index) => (
              <div className="card mb-3 max-width: 540px"  key={index}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={data.img} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{data.producto}</h5>
                      <p className="card-text">Talla: {data.talla}.</p>
                      <p className="card-text">Precio: ${data.precio}.</p>
                      <p className="card-text">Referencia: #{data.codigo}.</p>
                      <p className="card-text">Descripción: {data.descripcion}.</p>
                      <p className="card-text"><small className="text-muted">3 mins ago</small></p>
                    </div>
                    <ButtonDele
                      onClick={() => dispatch(deleteProduct(data.codigo))}>
                      Eliminar
                    </ButtonDele>
                  </div>
                </div>
              </div>
            ))
          }

        </div>
        <div className="col-4">
          <h3 className="text-center mt-5">Agrega todos los productos que quieras Vender</h3><br />
          <p>** Las imágenes deben ser de menos de 16 KB para poder visualizarse correctamente.</p><br />

          <form className="form-group" onSubmit={handleSubmit}>
            <input
              type="text"
              name="producto"
              className="form-control"
              placeholder="Nombre del producto"
              value={producto}
              onChange={handleInputChange}
              required={true}
            />
            <input
              type="text"
              name="talla"
              className="form-control"
              placeholder="Talla"
              value={talla}
              onChange={handleInputChange}
              required={true}
            />
            <input
              type="text"
              name="precio"
              className="form-control"
              placeholder="Precio"
              value={precio}
              onChange={handleInputChange}
              required={true}
            />
            <input
              type="text"
              name="codigo"
              className="form-control gap-2"
              placeholder='Valor númerico como referencia.'
              value={codigo}
              onChange={handleInputChange}
              required={true}
            />
            <textarea
              name="descripcion"
              className="form-control mt-2"
              autoComplete="of"
              placeholder='Menciona las características de tu producto.'
              value={descripcion}
              onChange={handleInputChange}
              required={true}
            >
            </textarea>
            <input
              type="file"
              name="imagen"
              className="form-control"
              onChange={handleFile}
            /><br />
            <div className="d-grid gap-2 mx-auto ">
              <button
                className="btn btn-info"
                type="submit" >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vender