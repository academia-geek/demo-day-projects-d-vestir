import { typesSell } from '../types/types'
import { db } from '../firebase/firebaseConfig'
import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

// Accion - Funcion asincronica -- Creacion o agregar productos.
export const addProduct = (producto, talla, precio, img, descripcion, codigo) => {
    return (dispatch) => {
        const newProduct = {
            producto,
            talla,
            precio,
            img,
            descripcion,
            codigo
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
export const deleteProduct = (codigo) => {
    return async (dispatch) => {
        const productCollection = collection(db, 'Productos');
        const q = query(productCollection, where('codigo', '==', codigo))

        const data = await getDocs(q)
        data.forEach(item => {
            deleteDoc(doc(db, 'Productos', item.id))
        })
        dispatch(Delete(codigo))
    }
}

export const Delete = (codigo) => {
    return {
        type: typesSell.DELETE_NEW_PRODUCT,
        payload: codigo
    }
}

// Editar
export const Edit = (products) => {
    return {
        type: typesSell.EDIT_NEW_PRODUCT,
        payload: products
    }
}

export const editProduct = (codigo, products) => {
    return async (dispatch) => {
        const productCollection = collection(db, 'Productos');
        const q = query(productCollection, where('codigo', '==', codigo))

        const data = await getDocs(q)
        let id
        data.forEach(async (item) => {
            id = item.id
        })
        console.log(id)

        const referencia = doc(db, 'Productos', id);
        await updateDoc(referencia, products)
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
        dispatch(Edit(products))
        dispatch(listProduct())
        console.log(products)
    }
}

