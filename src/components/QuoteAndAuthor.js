import React from "react";

class QuoteAndAuthor extends React.Component {
  render() {

    return (
      <div className="quotebox">
        <div
          className="fadeIn"
          key={Math.random()}>
          <h2>Quote of the Day</h2>
          <h1 className="quote">{this.props.quote}"</h1>
          <h5 className="author">
            -{this.props.author ? this.props.author : "Unknown"}-
          </h5>
        </div>
        <button
          className="buttonnewquote"
          onClick={this.props.handleClick}>
          Search quote
        </button>
      </div>
    );
  }
}

export default QuoteAndAuthor;

