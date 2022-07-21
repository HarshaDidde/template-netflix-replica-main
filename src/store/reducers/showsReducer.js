import SHOWS from "../constants";

const initialState = {
    showsData: [],
    isLoading: false,
    isError: false,
  };


const reducer = (state=initialState, action) => {
    switch(action.type) {
        case SHOWS.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case SHOWS.LOAD_SUCCESS:
      return {
        ...state,
        showsData: action.showsData,
        isLoading: false,
      };

    default: return state;
    }
}

export default reducer;
