import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./Components/Quote";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  // Quotes' State
  const [quote, saveQuote] = useState({});

  const consultAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const quote = await api.json();
    saveQuote(quote[0]);
  };

  // Load a quote
  useEffect(() => {
    consultAPI();
  }, []);

  return (
    <Container>
      <Quote quote={quote} />
      <Button onClick={consultAPI}>Get Phrase</Button>
    </Container>
  );
}

export default App;
