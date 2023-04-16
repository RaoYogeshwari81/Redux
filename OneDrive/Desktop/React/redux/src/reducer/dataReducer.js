const is = { data: [] };
export const dataReducer = (state = is, action) => {
  console.log(state, action, "Data Reducer");

  switch (action.type) {
    case "addData": {
      console.log(action, "data reducer");

      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    }

    case "delData": {
      return {
        ...state,
        data: state.data.filter((data) => {
         return data.id != action.payload;
        }),
      };
    }

    default:
      return state;
  }
};
