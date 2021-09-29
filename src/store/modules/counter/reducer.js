const reducerCounter = (state = 0, action) => {
  const { number } = action;
  switch (action.type) {
    case "ADD_NUMBER":
      state = number;
      return state;
    case "SUB_NUMBER":
      if (state > 0) {
        state = number;
      }
      return state;
    default:
      return state;
  }
};

export default reducerCounter;
