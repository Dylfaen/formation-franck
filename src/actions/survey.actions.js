

import * as surveyConst from "../api/survey.const";
import { sendAnswer, sendAnswerWithError } from "../api/survey.api";

export const initview = () => ({
  type: surveyConst.SURVEY_INIT_VIEW
});

export const sendSurveyPendig = () => ({
  type: surveyConst.SURVEY_ANSWER_PENDING
});

export const sendSurveyFulfiled = () => ({
  type: surveyConst.SURVEY_ANSWER_FULFILED
});

export const sendSurveyRejected = () => ({
  type: surveyConst.SURVEY_ANSWER_REJECTED
});

export const handleSave = body => dispatch => {
  dispatch(sendSurveyPendig());
  sendAnswerWithError(body)
    .then(() => {
      dispatch(sendSurveyFulfiled());
      console.log("demande rèussi");
    })
    .catch(err => {
      dispatch(sendSurveyRejected(err));
      console.log("demande rejeté")
    });
};
