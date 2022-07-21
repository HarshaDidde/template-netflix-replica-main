import SHOWS from "../constants";
import TitlesData from '../../../data/titles.json';

export const requestShowsData = () => async (dispatch) => {
    dispatch({
      type: SHOWS.LOAD,
    });
    try {
    
      dispatch({
        type: SHOWS.LOAD_SUCCESS,
        showsData:TitlesData.shows,
        isError: false,
      });
    } catch (e) {
      dispatch({
        type: SHOWS.LOAD_SUCCESS,
        usersData: [],
        isError: true,
      });
    }
  };
  