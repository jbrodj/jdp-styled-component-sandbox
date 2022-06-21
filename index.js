import React from "react";
import { render } from "react-dom";
import styled from "styled-components";

// To recreate: https://imgur.com/a/gA3CEkl

const purple = "#4B286D";
const fontHelvetica = "Helvetica";

const Wrapper = styled.section`
  padding: 2em;
  background: #fff;
  display: flex;
  font-family: ${fontHelvetica};
`;

const Title = styled.h1`
  font-size: 15px;
  font-family: ${fontHelvetica};
  font-weight: 700;
  text-align: left;
  color: #444;
`;

const Subheading = styled.h2`
  font-size: 30px;
  font-family: ${fontHelvetica};
  font-weight: 300;
  text-align: left;
  color: ${purple};
  margin: 0;
`;

const ExerciseWrapper = styled.div`
  padding: 0 10px;
`;

const GreenButton = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  font-family: inherit;
  padding: 15px 40px;
  border-radius: 5px;
`;

const App = () => {
  return (
    <Wrapper>
      <Title></Title>
      <ExerciseWrapper>
        {
          /* Write your code here */
          <Wrapper>
            <div style={{ width: "50%" }}>
              <img
                display="block"
                width="100%"
                src="https://images.ctfassets.net/3cqlnin176yn/3apXflYuZiT5jM0CAWJM5m/c800ed48b07c2150fee793660c5bdae5/1goat-transp-internet-round-hero.png?w=1200&q=80&fm=webp"
                alt="Cutie goat with some lavender!"
              />
            </div>
            <div style={{ width: "50%" }}>
              <Title>Home Internet</Title>
              <Subheading>
                Internet that's more than fast. <span>It's unstoppable</span>
              </Subheading>
              <p style={{ lineHeight: "1.5" }}>
                Enjoy the unstoppable power of 100% fibre with Canada's most
                reliable internet technology, only with TELUS. Get TELUS
                PureFibre Gigabit Internet for $89/mo. when you bundle with
                TELUS Mobility.
              </p>
              <GreenButton>Get this deal</GreenButton>
            </div>
          </Wrapper>
        }
      </ExerciseWrapper>
    </Wrapper>
  );
};

render(<App />, document.getElementById("root"));
