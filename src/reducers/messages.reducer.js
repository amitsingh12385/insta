const messagesReducerDefaultState = [];

const messagesReducer = (
  state = messagesReducerDefaultState,
  { type, messages }
) => {
  switch (type) {
    case "ADD_MESSAGES":
      return [...state, ...messages];
    default:
      return state;
  }
};

export default messagesReducer;
