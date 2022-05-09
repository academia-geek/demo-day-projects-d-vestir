import * as actionTypes from '../types/types';

const initialState = {
  products: [
    {
      id: 1,
      title: "Sudadera color menta.",
      genero: 'Unisex',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 40000,
      original: 79080,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F1.jpg?alt=media&token=f98a6208-98c9-4698-a1bc-da369e928178",
    },
    {
      id: 2,
      title: "Jeans rectos tiro bajo.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 78600,
      original: 120000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F2.jpg?alt=media&token=94aae90a-462d-48a8-bff5-48c390fc88ee",
    },
    {
      id: 3,
      title: "Crop top.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 25900,
      original: 80000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F3.jpg?alt=media&token=042203d1-3617-4c24-a25b-7adc6403453a",
    },
    {
      id: 4,
      title: "Camisa básica maga corta.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 20000,
      original: 119000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F4.jpg?alt=media&token=ad1fafee-070a-4be0-80a7-f05a5384559b",
    },
    {
      id: 5,
      title: "Jean, Sweater y botines.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 150000,
      original: 349900,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F5.jpg?alt=media&token=46e746e5-6594-4600-8f82-194597681821",
    },
    {
      id: 6,
      title: "Vestido flores satinado.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 120000,
      original: 259000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F6.jpg?alt=media&token=6ae13adc-d971-411f-8ebf-33b1f8a99532",
    },
    {
      id: 7,
      title: "Camiseta blanca.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 16000,
      original: 45000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F7.jpg?alt=media&token=3be7df4e-076a-4200-ba01-d303ef8ad24f",
    },
    {
      id: 8,
      title: "Camisa con estampado tropical.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 40000,
      original: 129000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F8.jpg?alt=media&token=d2db8352-56b6-43e8-8ffd-d3857664e405",
    },
    {
      id: 9,
      title: "Vestido clásico.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 76900,
      original: 180000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F9.jpg?alt=media&token=db83bee4-963d-4dd9-9e55-1a811f214099",
    },
    {
      id: 10,
      title: "Camisa café.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 23500,
      original: 87000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F10.jpg?alt=media&token=ba627b6b-2f23-47e9-b770-078976155faa",
    },
    {
      id: 11,
      title: "Chaqueta de Jean.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 94800,
      original: 199999,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F11.jpg?alt=media&token=6ebd0319-adab-48de-8b6a-7a3944436be2",
    },
    {
      id: 12,
      title: "Botines, Jean slim fit.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 79000,
      original: 169899,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F12.jpg?alt=media&token=695825be-eb57-4c04-82ed-c3c3097caf99",
    },
    {
      id: 13,
      title: "Jeans slim fit lavado premium.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 68900,
      original: 153709,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F13.jpg?alt=media&token=f7046e9e-84e4-4c78-8f07-a0c2c556615b",
    },
    {
      id: 14,
      title: "Sweters de colores.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 47000,
      original: 148500,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F14.jpg?alt=media&token=ae21761d-255a-4939-b130-d970929c497a",
    },
    {
      id: 15,
      title: "Jeans skinny básicos.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 89990,
      original: 259990,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F15.jpg?alt=media&token=4a365a1c-6cbe-45da-b157-84372674db72",
    },
    {
      id: 16,
      title: "Sweater.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 60000,
      original: 190000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Shopping_cart%2F16.jpg?alt=media&token=3a237792-20d0-42ce-b310-7a3b9318582f",
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