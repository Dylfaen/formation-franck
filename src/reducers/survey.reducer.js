import * as surveyConst from "../api/survey.const";

const initState = {
  displayRates: false,
  errorMessage: "",
  displayConfirmation: false,
  pending: false
};

const surveyReducers = (state = initState, action) => {
  let newState;
  switch (action.type) {
    case surveyConst.SURVEY_INIT_VIEW:
      return initState;
    case surveyConst.SURVEY_ANSWER_PENDING:
      return { ...state, pending: true };
    case surveyConst.SURVEY_ANSWER_FULFILED:
      newState = { ...state, pending: false, displayConfirmation: true }
      return newState;
    case surveyConst.SURVEY_ANSWER_REJECTED:
      newState = { ...state, pending: false, displayConfirmation: true }
      console.log("newState", newState)
      return newState;
    default:
      return state;
  }
};

export default surveyReducers;
