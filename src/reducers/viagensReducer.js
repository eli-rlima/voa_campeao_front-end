const initialState = {
  viagens: [],
  selectedViagem: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_VIAGEM":
      return {
        ...state,
        selectedViagem: action.payload
      };
    case "SET_VIAGENS":
      return {
        ...state,
        viagens: action.payload
      };

    default:
      return state;
  }
};
