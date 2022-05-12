import { typesCanjear } from '../types/types';

// Funciones - acciones
export const addToCart = (itemID) => {
    return {
        type: typesCanjear.add_to_cart,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => {
    return {
        type: typesCanjear.remove_from_cart,
        payload: {
            id: itemID
        }
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: typesCanjear.adjust_qty,
        payload: {
            id: itemID,
            qty: value
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: typesCanjear.load_current_item,
        payload: item
    }
}