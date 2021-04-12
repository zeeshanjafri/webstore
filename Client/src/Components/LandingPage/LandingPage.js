import React, { useState, useEffect } from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Images/watch_test.jpeg";
import { Carousel } from "react-responsive-carousel";

const Homescreen = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #403f4c;

  h1 {
    text-align: center;
  }
`;

const StyledCarousel = styled(Carousel)`
  // background: #fdfffc;
  justify-content: center;

  img {
    max-height: 200px;
    max-width: 400px;
  }

  ul thumbs animated {
    display: none;
  }
`;

const FeaturedProducts = styled.div`
  width: 80%;
  margin: 0 auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const StyledPaper = styled.div`
  background-color: #fdfffc;
  color: black;
  margin: 40px;
  width: 12em;
  height: 15em;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    max-height: 100px;
    width: auto;
  }

  h3 {
    text-align: center;
    margin: 2px 0 30px 0;
  }

  button {
    margin: 25px;
  }
`;

function LandingPage() {
  const [state, setState] = useState({});
  const [loaded, markLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => setState(res))
      .then(() => markLoaded(true))
      .then(() => console.log(state));
    // console.log(state);
  }, [loaded]);

  console.log(state[0]);

  //TODO: Add image files locally

  return (
    <Homescreen>
      <h1>Welcome</h1>
      <StyledCarousel
        autoPlay="true"
        emulateTouch="true"
        infiniteLoop="true"
        useKeyboardArrows="true"
        showThumbs={false}
        width="100%"
        centerMode="true"
      >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img1} />
        </div>
      </StyledCarousel>
      <FeaturedProducts>
        <StyledPaper>
          <h3>{state[0]?.name}</h3>
          <img src={img1} max-width="10em" max-height="18em" />
          <button type="button">
            <a href="/product">See More</a>
          </button>
        </StyledPaper>

        <StyledPaper>
          <h3>{state[1]?.name}</h3>
          <img src={img1} max-width="10em" max-height="10em" />
          <button type="button">
            <a href="/product">See More</a>
          </button>
        </StyledPaper>

        <StyledPaper>
          <h3>{state[2]?.name}</h3>
          <img src={img1} max-width="10em" max-height="10em" />
          <button type="button">
            <a href="/product">See More</a>
          </button>
        </StyledPaper>
      </FeaturedProducts>
    </Homescreen>
  );
}

export default LandingPage;
