import { typesSell } from "../types/types";

const initialState = {
    products: [],
    
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesSell.ADD_NEW_PRODUCT:
            return {
                products: [action.payload, ...state.products]
            }
        case typesSell.LIST_NEW_PRODUCT:
            return {
                products: [...action.payload]
            }
        case typesSell.DELETE_NEW_PRODUCT:
            return {
                products: state.products.filter(p => p.id !== action.payload)
            }
        case typesSell.EDIT_NEW_PRODUCT:
            return {
                ...state,
               
            }
        default:
            return state
    }
}