const initialState = [];
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialValue;
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state.find((item) => item.name === action.item.name)
        ? state.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity + 1
                }
              : item
          )
        : [...state, { ...action.item, quantity: 1 }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.name !== action.item.name);

    case "DECREMENT_QUANTITY":
      // if quantity is 1 remove from cart, otherwise decrement quantity
      return state.find((item) => item.name === action.item.name)?.quantity ===
        1
        ? state.filter((item) => item.name !== action.item.name)
        : state.map((item) =>
            item.name === action.item.name
              ? {
                  ...item,
                  quantity: item.quantity - 1
                }
              : item
          );
          case "INCREMENT_QUANTITY":
            // if quantity is 1 remove from cart, otherwise decrement quantity
            return state.find((item) => item.name === action.item.name)?.quantity ===
              1
              ? state.filter((item) => item.name !== action.item.name)
              : state.map((item) =>
                  item.name === action.item.name
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                      }
                    : item
                );
    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item
});

export const decrementItemQuantity = (item) => ({
  type: "DECREMENT_QUANTITY",
  item
});
export const incrementItemQuantity = (item) => ({
  type: "INCREMENT_QUANTITY",
  item
});
export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  item
});

export const clearCart = () => ({
  type: "CLEAR_CART"
});