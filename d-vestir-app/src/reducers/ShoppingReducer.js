import * as actionTypes from '../types/types';

const initialState = {
  products: [
    {
      id: 1,
      title: "Sudadera color menta.",
      genero: 'Unisex',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 79080.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/ns-37rVmK3jY-c-unsplash_dwl0pm.jpg",
    },
    {
      id: 2,
      title: "Jeans rectos tiro bajo.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 12000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924781/Shopping_cart/alina-levkovich-vao35_bkgFc-unsplash_fnfkpg.jpg",
    },
    {
      id: 3,
      title: "Crop top.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 15000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/marlon-alves-fTw4sPi6YKc-unsplash_ne2l9a.jpg",
    },
    {
      id: 4,
      title: "Camisa básica maga corta.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 119000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/brian-lawson-Z9tGkCotYHs-unsplash_rz9emu.jpg",
    },
    {
      id: 5,
      title: "Jean y Sweater ",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 350000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924779/Shopping_cart/heather-ford-5gkYsrH_ebY-unsplash_sanzva.jpg",
    },
    {
      id: 6,
      title: "Vestido flores satinado.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 45900.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924780/Shopping_cart/bernadett-grega-y69xP87X26U-unsplash_ai76ma.jpg",
    },
    {
      id: 7,
      title: "Camiseta blanca.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 15000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/bao-bao-TysFvOl78u0-unsplash_fmuaho.jpg",
    },
    {
      id: 8,
      title: "Camisa con estampado tropical.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 129000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/jeremy-alford-mx1OV1nlFI0-unsplash_x75gkz.jpg",
    },
    {
      id: 9,
      title: "Vestido clásico.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 180000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924777/Shopping_cart/laura-chouette-q7dkbaeyjUE-unsplash_dvepti.jpg",
    },
    {
      id: 10,
      title: "Camisa café.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 87000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924776/Shopping_cart/lizzy-jenkins-Ski5jkhduAY-unsplash_lvvub8.jpg",
    },
    {
      id: 11,
      title: "Chaqueta de Jean.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 149999.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924771/Shopping_cart/caio-coelho-QRN47la37gw-unsplash_mfincb.jpg",
    },
    {
      id: 12,
      title: "Botines, Jean slim fit.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 169899.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924774/Shopping_cart/sarah-dorweiler-gUPiTDBdRe4-unsplash_gqtmhc.jpg",
    },
    {
      id: 13,
      title: "Jeans slim fit lavado premium.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 1137099.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924774/Shopping_cart/creaslim-SrqCf0SBaS8-unsplash_v3cr7w.jpg",
    },
    {
      id: 14,
      title: "Sweters de colores.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 69099.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/md-salman-tWOz2_EK5EQ-unsplash_mgorpb.jpg",
    },
    {
      id: 16,
      title: "Jeans skinny básicos.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 89990.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924773/Shopping_cart/maude-frederique-lavoie-EDSTj4kCUcw-unsplash_blmzaw.jpg",
    },
    {
      id: 17,
      title: "Sweater.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 90000.0,
      image:
        "https://res.cloudinary.com/dxu01bvpk/image/upload/v1650924803/Shopping_cart/mediamodifier-7cERndkOyDw-unsplash_q1rsga.jpg",
    },
  ],
  cart: [],

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