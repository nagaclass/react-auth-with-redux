import { API_INSTANCE } from "../../api";
import personTabsTypes from "./personTabs.types";

export const validatedPersonKaartsAction = IDS => async dispatch => {
  dispatch({
    type: personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_REQUEST,
  });

  try {
    const { data } = await API_INSTANCE.post(
      `/person/validateIDs`,
      {
        IDS,
      },

      {
        headers: {
          Authorization: "Basic ZXh0ZGF0YTplYTI0MmM3MjhiYmVjZWUxOWY3NzEyNjcyNzNlOWU4Yg==",
        },
      }
    );

    dispatch({
      type: personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_FAILED,
      payload: error.response,
      // error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const getLocationsAction =
  (type = "", searchTerm = "", page = 1) =>
  async (dispatch, getState) => {
    dispatch({
      type: personTabsTypes.GET_LOCATIONS_REQUEST,
    });

    const { user } = getState();
    try {
      const { data } = await API_INSTANCE.get(
        `/location?navigate[page]=${page}&navigate[limit]=25&filter[${type}]=${searchTerm}&type=all`,
        {
          headers: {
            token: user?.user?.token,
          },
        }
      );

      dispatch({
        type: personTabsTypes.GET_LOCATIONS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: personTabsTypes.GET_LOCATIONS_ERROR,
        payload: error.response,
      });
    }
  };
export const searchLocationsAction = searchTerm => async (dispatch, getState) => {
  dispatch({
    type: personTabsTypes.SEARCH_LOCATIONS_REQUEST,
  });

  const { user } = getState();
  try {
    const { data } = await API_INSTANCE.post(
      `/location?navigate[page]=1&navigate[limit]=25&filter[code]=${searchTerm}&type=all`,
      {
        headers: {
          token: user?.user?.token,
        },
      }
    );

    dispatch({
      type: personTabsTypes.SEARCH_LOCATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: personTabsTypes.SEARCH_LOCATIONS_ERROR,
      payload: error.response,
    });
  }
};

export const getLandsActions = () => async (dispatch, getState) => {
  dispatch({
    type: personTabsTypes.GET_LAND_REQUEST,
  });

  const { user } = getState();
  try {
    const { data } = await API_INSTANCE.get(`/address/listcountries`, {
      headers: {
        token: user?.user?.token,
      },
    });

    dispatch({
      type: personTabsTypes.GET_LAND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: personTabsTypes.GET_LAND_ERROR,
      payload: error.response,
    });
  }
};

export const setIdenticationActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_TAB,
  payload,
});

export const setIdenticationrRFIDActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_RFID_ACTIVE_TAB,
  payload,
});

export const setIdenticationrKeentActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_KEENT_ACTIVE_TAB,
  payload,
});

export const setIdenticationrPincodeActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_PINCODE_ACTIVE_TAB,
  payload,
});

export const setIdenticationrBarcodeActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_BARCODE_ACTIVE_TAB,
  payload,
});

export const setIdenticationrVirtualIdActiveTab = payload => ({
  type: personTabsTypes.SET_ACTIVE_IDENTIFICATES_VIRTUALID_ACTIVE_TAB,
  payload,
});

export const setTableOfCardLocationsAction = payload => ({
  type: personTabsTypes.SET_TABLE_OF_CARD_LOCATIONS,
  payload,
});

// make an action to add new card but throw an error message
// if the code input is empty
export const addNewVirtualIdCardAction = (arr, newCard) => {
  const isEmptyCodeField = arr.find(c => !c.code);
  const message = "Please write a valid code";
  if (isEmptyCodeField) {
    return message;
  }
  return [...arr, newCard];
};
