import { typesSell } from '../types/types'
import { db } from '../firebase/firebaseConfig'
import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

// Accion - Funcion asincronica -- Creacion o agregar productos.
export const addProduct = (producto, talla, precio, img, descripcion) => {
    return (dispatch) => {
        const newProduct = {
            producto,
            talla,
            precio,
            img,
            descripcion,
        }
        addDoc(collection(db, 'Productos'), newProduct)
            .then(resp => {
                dispatch(Add(newProduct))
            })
            .catch(error => {
                console.log(error);
            })
    }
}

// Crear la accion funcion sincronica - Agregar.
export const Add = (products) => {
    return {
        type: typesSell.ADD_NEW_PRODUCT,
        payload: products
    }
}

// Listar
export const listProduct = () => {
    return async (dispatch) => {
        const data = await getDocs(collection(db, 'Productos'))

        const productos = []
        data.forEach(doc => {
            productos.push({
                ...doc.data(),
            })
        })
        dispatch(List(productos))
    }
}

export const List = (products) => {
    return {
        type: typesSell.LIST_NEW_PRODUCT,
        payload: products
    }
}

// Eliminar
export const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().login.id;
        await deleteDoc(doc(db, `${uid}/Productos/data`, `${id}`))

        dispatch(Delete(id))
        dispatch(listProduct(uid))
    }
}

export const Delete = (id) => {
    return {
        type: typesSell.DELETE_NEW_PRODUCT,
        payload: id
    }
}

// Editar
export const Edit = (id, products) => {
    return {
        type: typesSell.EDIT_NEW_PRODUCT,
        payload: {
            id,
            ...products
        }
    }
}

export const editProduct = (products) => {
    return async (dispatch, getState) => {
        const id = getState().login.id
        console.log(products)

        const Editar = {
            producto: products.producto,
            talla: products.talla,
            precio: products.precio,
            descripcion: products.descripcion,
            img: products.img
        }
        const card = { ...Editar }
        delete card.id

        const docRef = await doc(db, `${id}/Productos/data`, `${products.id}`)
        console.log(docRef)

        const updateTimestamp = await updateDoc(docRef, {
            producto: products.producto,
            talla: products.talla,
            precio: products.precio,
            descripcion: products.descripcion,
            img: products.img
        })

        dispatch(listProduct(id))
    }
}