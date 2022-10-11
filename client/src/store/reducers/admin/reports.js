import constants from "../../constants"

const initialState = {
  get: {
    success: false,
    loading: false,
    failed: false,
    message: "",
    report: { orders: [], total_sum: null },
  },
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_REPORT_FAILED:
      return {
        ...state,
        get: {
          success: false,
          loading: false,
          failed: true,
          message: action.payload,
        },
      }
    case constants.GET_REPORT_LOADING:
      return {
        ...state,
        get: {
          success: false,
          loading: true,
          failed: false,
          message: "Загрузка...",
        },
      }
    case constants.GET_REPORT_SUCCESS:
      return {
        ...state,
        get: {
          success: true,
          loading: false,
          failed: false,
          report: action.payload,
        },
      }
    default:
      return state
  }
}

export default reducer
