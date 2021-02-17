import "./styles.css";
import React, { useState, useEffect } from "react";
import Quote from "./Quote.js";

const token = "f2822779145512a1a8cee0ef4a1f14ba";

export default function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState({});

  const getQuotes = async () => {
    try {
      const response = await fetch("https://favqs.com/api/quotes", {
        headers: { Authorization: `Token token=${token}` }
      });
      const data = await response.json();
      setQuoteList(data.quotes);
    } catch (e) {
      console.log(e);
    }
  };

  const getQuoteOfTheDay = async () => {
    try {
      const response = await fetch("https://favqs.com/api/qotd");
      const data = await response.json();
      setQuote(data.quote);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuoteOfTheDay();
  }, []);

  const getQuoteList = () => {
    getQuotes();
  };

  return (
    <div className="App">
      <h1>Quote of the Day!</h1>

      <Quote quote={quote} />
      <button onClick={getQuoteList}> Get Quote List </button>
      <h2>Quote List</h2>
      {quoteList.map((singleQuote) => {
        return <Quote quote={singleQuote} key={singleQuote.id} />;
      })}
    </div>
  );
}
