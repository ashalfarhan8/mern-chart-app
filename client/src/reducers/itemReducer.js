import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
} from "../actions/types";

// This will store the data from the server temporary
// just to render the data that returned from server
const initialState = {
  items: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        // Return the current state
        ...state,
        // Set the Local Storage array from data that sent from getItems() in itemActions
        items: action.payload,
        // Set loading to false when the data received
        loading: false,
      };
    case DELETE_ITEM:
      return {
        // Return the current state
        ...state,
        // Filter the Local Storage array with exception
        // of the payload that returned from the action
        // NOTE: The item is actually have been deleted while
        // the action triggered
        // The returned payload is the feedback / response from the database
        // that the deleted item is succesfully deleted
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_ITEM:
      return {
        // Return te current state
        ...state,
        // Add the Local Storage array with the returned response from
        // Database
        items: [...state.items, action.payload],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
