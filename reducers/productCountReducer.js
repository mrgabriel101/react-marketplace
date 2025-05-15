const cartItemReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_QUANTITY':
      return [...state, action.payload];
    case 'DECREASE_QUANTITY':
      return [...state, action.payload];
    case 'RESET_QUANTITY':
      return 0;
    default:
      return state;
  }
};

export default cartItemReducer;
