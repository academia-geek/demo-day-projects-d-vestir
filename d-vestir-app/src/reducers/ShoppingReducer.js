import React from 'react'
import * as actionTypes from '../types/types';

const initialState = {
  products: [{
    id: 1,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 1500.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924803/Shopping_cart/mediamodifier-7cERndkOyDw-unsplash_q1rsga.jpg",
  },
  {
    id: 2,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 2000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924781/Shopping_cart/alina-levkovich-vao35_bkgFc-unsplash_fnfkpg.jpg",
  },
  {
    id: 3,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/marlon-alves-fTw4sPi6YKc-unsplash_ne2l9a.jpg",
  },
  {
    id: 4,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/brian-lawson-Z9tGkCotYHs-unsplash_rz9emu.jpg",
  },
  {
    id: 5,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924779/Shopping_cart/heather-ford-5gkYsrH_ebY-unsplash_sanzva.jpg",
  },
  {
    id: 6,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/bernadett-grega-y69xP87X26U-unsplash_ai76ma.jpg",
  },
  {
    id: 7,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/bao-bao-TysFvOl78u0-unsplash_fmuaho.jpg",
  },
  {
    id: 8,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/jeremy-alford-mx1OV1nlFI0-unsplash_x75gkz.jpg",
  },
  {
    id: 9,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/laura-chouette-q7dkbaeyjUE-unsplash_dvepti.jpg",
  },
  {
    id: 10,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924776/Shopping_cart/lizzy-jenkins-Ski5jkhduAY-unsplash_lvvub8.jpg",
  },
  {
    id: 11,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924771/Shopping_cart/caio-coelho-QRN47la37gw-unsplash_mfincb.jpg",
  },
  {
    id: 12,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924774/Shopping_cart/sarah-dorweiler-gUPiTDBdRe4-unsplash_gqtmhc.jpg",
  },
  {
    id: 13,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924774/Shopping_cart/creaslim-SrqCf0SBaS8-unsplash_v3cr7w.jpg",
  },
  {
    id: 14,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/md-salman-tWOz2_EK5EQ-unsplash_mgorpb.jpg",
  },
  {
    id: 15,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/ns-37rVmK3jY-c-unsplash_dwl0pm.jpg",
  },
  {
    id: 16,
    title: "Laboriosam molestiae nostrum in.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
    price: 15000.0,
    image:
      "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/maude-frederique-lavoie-EDSTj4kCUcw-unsplash_blmzaw.jpg",
  },
], //id, title, des, price, img

  cart: [], //id, title, des, price, img, cuantity
  
  currentItem: null,
}

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Obtener los items del array
      const item = state.products.find(p => p.id === action.payload.id)
      // Validar si los items ya se agregaron al carrito
      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false)

      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item)
          : [...state.cart, { ...item, qty: 1 }]

      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      }

    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        )
      }

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }

    default:
      return state
  }
}

export default ShoppingReducer