import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Images/watch_test.jpeg";
import { Carousel } from "react-responsive-carousel";

const Homescreen = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #403f4c;

  h1 {
    text-align: center;
  }
`;

const StyledCarousel = styled(Carousel)`
  background: #fdfffc;

  img {
    max-height: 100px;
    max-width: 400px;
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
  return (
    <Homescreen>
      <h1>Welcome</h1>
      <StyledCarousel
        autoPlay="true"
        emulateTouch="true"
        infiniteLoop="true"
        useKeyboardArrows="true"
        showThumbs="false"
        width="100%"
        centerMode="true"
      >
        <div>
          <img src={img1} />
          <p>Legend 3</p>
        </div>
        <div>
          <img src={img1} />
          <p>Legend 3</p>
        </div>
        <div>
          <img src={img1} />
          <p>Legend 3</p>
        </div>
      </StyledCarousel>
      <FeaturedProducts>
        <StyledPaper>
          <h3>Product 1</h3>
          <img src={img1} max-width="10em" max-height="10em" />
          <button type="button">
            <a href="/product">Click Me!</a>
          </button>
        </StyledPaper>

        <StyledPaper>
          <h3>Product 1</h3>
          <img src={img1} max-width="10em" max-height="10em" />
          <button type="button">
            <a href="/product">Click Me!</a>
          </button>
        </StyledPaper>

        <StyledPaper>
          <h3>Product 1</h3>
          <img src={img1} max-width="10em" max-height="10em" />
          <button type="button">
            <a href="/product">Click Me!</a>
          </button>
        </StyledPaper>
      </FeaturedProducts>
    </Homescreen>
  );
}

export default LandingPage;
