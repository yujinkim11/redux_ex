let initialState = {
  count: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  console.log(action);
  if (action.type === "INCREMENT") {
    return { ...state, count: state.count + action.payload.num };
  }
  if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  }

  return { ...state };
}

export default reducer;
