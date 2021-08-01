import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteBox from "./QuoteBox";

const App = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");
  //   const [backgroundColor, setBackgroundColor] = useState("");
  useEffect(() => {
    const fetchQuote = async () => {
      const { data } = await axios.get("https://api.quotable.io/random");
      setAuthor(data.author);
      setQuote(data.content);
    };
    fetchQuote();
  }, []);

  const onSubmit = async () => {
    const { data } = await axios.get("https://api.quotable.io/random");
    setAuthor(data.author);
    setQuote(data.content);
  };

  return (
    <div className="main">
      <div className="container">
        <QuoteBox author={author} quote={quote} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default App;
