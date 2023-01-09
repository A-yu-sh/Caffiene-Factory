const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    // Checks if an item is already there in the cart
    const existItem = state.find((x) => x.id === action.id);
    if (existItem) {
      alert("item already exist");
    } else
      return [
        // ThE Actual code to add to cart
        ...state,

        {
          id: action.id,
          Name: action.Name,
          Price: action.Price,
          Image: action.Image,
          Quantity: action.Quantity,
        },
      ];
  }
  if (action.type === "REMOVE_FROM_CART") {
    return state.filter((item) => item.id !== action.id);
  }

  return state;
};

export default reducer;
