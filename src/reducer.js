export const initialState = {
  basket: [],
  user: null,
  srch: "",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_BASKET":
      let newBasket = [...state.basket];
      let index = state.basket.findIndex((basketItem) => {
        return basketItem.id === action.id;
      });
      if (index >= 0) {
        newBasket.splice(index, 1);
      }
      return { ...state, basket: newBasket };
    case "SEARCH":
      return {
        ...state,
        srch: action.input,
      };
    default:
      return state;
  }
};
export default reducer;
