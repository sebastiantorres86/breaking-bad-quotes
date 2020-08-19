import React from "react";
import styled from "@emotion/styled";

const ContainerQuote = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 762px) {
    margin-top: 17rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    color: #1f6032;

    &::before {
      content: open-quote;
      font-size: 10rem;
      color: #1f6032;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }

  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;

const Quote = ({ quote }) => {

  if(Object.keys(quote).length === 0) {
    return null
  }

  return (
    <ContainerQuote>
      <h1>{quote.quote}</h1>
      <p>- {quote.author}</p>
    </ContainerQuote>
  );
};

export default Quote;
