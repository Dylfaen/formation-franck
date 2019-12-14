import React, { Component } from 'react';

import StarsRating from 'stars-rating'

import './Survey.css'

class Survey extends Component {

  state = {
    note: 5,
    commentValue: ""
  }

  handleNoteChange = (note) => {
    this.setState({ note })
  }

  handleCommentValueChange = (e) => {
    this.setState({ commentValue: e.target.value })
  }

  handleSubmit = () => {
    this.props.handleSave({
      note: this.state.note,
      commentValue: this.state.commentValue,
      journey: this.props.journey,
      investment: this.props.investment,
      user: this.props.user,
    })
  }

  render() {
    return (
      <div className="survey">
        {!this.props.survey.displayConfirmation ?
          (
            <div className="survey__form">
              <p className="survey__message">Merci pour votre évaluation</p>
              <StarsRating
                className="survey__star-rating"
                count={5}
                value={this.state.note}
                onChange={this.handleNoteChange}
                size={24}
                color2={'#ffd700'}
              />
              {this.state.note < 5 ?
                <textarea value={this.state.commentValue} onChange={this.handleCommentValueChange} /> : null
              }
              <button onClick={this.handleSubmit}>Envoyer</button>
            </div>
          )
          :
          (
            <div className="survey__confirm">
              <p>
                Merci d'avoir évalué notre formulaire
              </p>
            </div>
          )
        }




      </div>
    )
  }
}
export default Survey;


