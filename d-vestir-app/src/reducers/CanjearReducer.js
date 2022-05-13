import { typesCanjear } from "../types/types";

const initialState = {
  products_canjear: [
    {
      id: 1,
      title: "Camiseta amarilla.",
      genero: 'Unisex',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Jean oscuro',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-alisson-souto-1759622.jpg?alt=media&token=be9fdbaa-fbf7-4e72-84aa-98bcec7aa217",
    },
    {
      id: 2,
      title: "Camisa blanca.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Falda rosa',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-min-an-1123757.jpg?alt=media&token=73932b7e-fd49-4d1a-8e6c-6841d28693ff",
    },
    {
      id: 3,
      title: "Crop top.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Jean color azul',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-bruno-oliveira-2256246.jpg?alt=media&token=214f766e-9c5b-4d4c-aca5-fcd145339984",
    },
    {
      id: 4,
      title: "Falda azul.",
      genero: 'Mujer',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Sweater naranja',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-godisable-jacob-3689156.jpg?alt=media&token=0f1e3a98-7cbc-4efb-a104-feea694d852e",
    },
    {
      id: 5,
      title: "Blazer gris.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Pantalón en drill',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-chloe-1043474.jpg?alt=media&token=70e8b7b8-0ac7-4b14-a67e-19a4cc15ea0d",
    },
    {
      id: 6,
      title: "Caqueta en Jean.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Zapatillas',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-sindre-str%C3%B8m-1040945.jpg?alt=media&token=3fb051d7-5064-40d2-87f1-ab43e11f9bff",
    },
    {
      id: 7,
      title: "Cazadora amarilla.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Jean skinny',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-marlene-lepp%C3%A4nen-1183266.jpg?alt=media&token=c5e9c188-3c49-4f5e-95fb-42fa0ddd5079",
    },
    {
      id: 8,
      title: "Camisa cuello de tortuga.",
      genero: 'Hombre',
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam molestiae nostrum in. Voluptatum quidem expeditaullam odio quis laborum corrupti.Accusantium inventore possimus ab saepe deserunt in quia alias necessitatibus consectetur delectus, nobis impedit enim sapiente exercitationem ratione tempore harum.",
      price: 'Camisa café.',
      image:
        "https://firebasestorage.googleapis.com/v0/b/ropa-app-bb1da.appspot.com/o/Canjear%2Fpexels-prayoon-sajeev-2897529.jpg?alt=media&token=6998d98a-ae27-41c8-bb5e-f1ab1b48e446",
    },
  ],
  cart_canjear: [],

  currentItem_canjear: null,
}

const CanjearReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesCanjear.add_to_cart:
      // Obtener los items del array
      const item = state.products_canjear.find(p => p.id === action.payload.id)
      // Validar si los items ya se agregaron al carrito
      const inCart = state.cart_canjear.find(item =>
        item.id === action.payload.id ? true : false)

      return {
        ...state,
        cart_canjear: inCart
          ? state.cart_canjear.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item)
          : [...state.cart_canjear, { ...item, qty: 1 }]

      }

    case typesCanjear.remove_from_cart:
      return {
        ...state,
        cart_canjear: state.cart_canjear.filter(item => item.id !== action.payload.id)
      }

    case typesCanjear.adjust_qty:
      return {
        ...state,
        cart_canjear: state.cart_canjear.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: + action.payload.qty }
            : item
        )
      }

    case typesCanjear.load_current_item:
      return {
        ...state,
        currentItem_canjear: action.payload,
      }

    default:
      return state
  }
}

export default CanjearReducer