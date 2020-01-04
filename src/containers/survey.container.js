import { connect } from "react-redux";
import { initview, handleSave } from "../actions/survey.actions";
import Survey from "../components/Survey/Survey";

const mapStateToProps = state => ({
  survey: {
    displayRates: state.survey.displayRates,
    errorMessage: state.survey.errorMessage,
    pending: state.survey.pending,
    displayConfirmation: state.survey.displayConfirmation
  },
  journey: state.journey,
  investment: state.investment_id,
  user: state.user_id
});

const mapDispatchToProps = dispatch => ({
  initview: () => dispatch(initview()),
  handleSave: () => dispatch(handleSave())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
