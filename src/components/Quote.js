/**************************************************************************** */
/* Quotes credits: https://www.golangprograms.com/random-quote-generator.html */
/**************************************************************************** */
import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor";
import quotes from './QuotesDatabase'
import './quote.css';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  };
  
  render() {
    return (
      <div className="quotes">
        <QuoteAndAuthor
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default Quote;

