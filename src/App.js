import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

const purple = "#4B286D";
const fontHelvetica = "Helvetica";

const Wrapper = styled.section`
  padding: 2em;
  background: #ccc;
`;

const Title = styled.h1`
  font-size: 30px;
  font-family: ${fontHelvetica};
  font-weight: 700;
  text-align: center;
  color: ${purple};
`;

const ExerciseWrapper = styled.div`
  padding: 0 10px;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Styled Components Exercise</Title>
      <ExerciseWrapper>{/* Write your code here */}</ExerciseWrapper>
    </Wrapper>
  );
};

export default App;
