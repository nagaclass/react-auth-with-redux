import personTabsTypes from "./personTabs.types";

const initialState = {
  loading: false,
  data: null,
  error: null,
  identificationActiveTab: "RFIDCARD",
  RFIDActiveKaart: 1,
  keentActiveKaart: 1,
  pincodeActiveKaart: 1,
  barcodeActiveKaart: 1,
  virtualIdActiveKaart: 1,
  tableOfCardLocations: [],
  getLocationCodeLoading: false,
  getLocationCodeSuccess: null,
  getLocationCodeError: false,
  getLandLoading: false,
  getLandSuccess: null,
  getLandError: false,
};

const personTabsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case personTabsTypes.PERSON_TABS_IDENTIFICATES_VALID_FAILED:
      return {
        ...state,
        loading: false,
        data: null,
        error: payload,
      };

    case personTabsTypes.GET_LOCATIONS_REQUEST:
      return {
        ...state,
        getLocationCodeLoading: true,
        getLocationCodeSuccess: null,
        getLocationCodeError: false,
      };
    case personTabsTypes.GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        getLocationCodeLoading: false,
        getLocationCodeSuccess: payload,
        getLocationCodeError: false,
      };
    case personTabsTypes.GET_LOCATIONS_ERROR:
      return {
        ...state,
        getLocationCodeLoading: false,
        getLocationCodeSuccess: null,
        getLocationCodeError: payload,
      };

    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_TAB:
      return {
        ...state,
        identificationActiveTab: payload ? payload : state.identificationActiveTab,
      };
    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_RFID_ACTIVE_TAB:
      return {
        ...state,
        RFIDActiveKaart: payload,
      };
    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_KEENT_ACTIVE_TAB:
      return {
        ...state,
        keentActiveKaart: payload,
      };
    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_PINCODE_ACTIVE_TAB:
      return {
        ...state,
        pincodeActiveKaart: payload,
      };

    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_BARCODE_ACTIVE_TAB:
      return {
        ...state,
        barcodeActiveKaart: payload,
      };
    case personTabsTypes.SET_ACTIVE_IDENTIFICATES_VIRTUALID_ACTIVE_TAB:
      return {
        ...state,
        virtualIdActiveKaart: payload,
      };
    case personTabsTypes.SET_TABLE_OF_CARD_LOCATIONS:
      return {
        ...state,
        tableOfCardLocations: [...state.tableOfCardLocations, ...payload],
      };

    case personTabsTypes.GET_LAND_REQUEST:
      return {
        ...state,
        getLandLoading: true,
        getLandSuccess: null,
        getLandError: false,
      };
    case personTabsTypes.GET_LAND_SUCCESS:
      return {
        ...state,
        getLandLoading: false,
        getLandSuccess: payload,
        getLandError: false,
      };
    case personTabsTypes.GET_LAND_ERROR:
      return {
        ...state,
        getLandLoading: false,
        getLandSuccess: null,
        getLandError: payload,
      };

    default:
      return state;
  }
};

export default personTabsReducer;
