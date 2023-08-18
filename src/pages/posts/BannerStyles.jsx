import styled from "styled-components";

export const Banner = styled.div`
  background-image: url(/imgs/bannerWebsite.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  height: 50vh;
  margin-top: 20px;
  width: 100wh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size:100% auto;

  @media screen and (max-width: 1008px) {
    height: 20vh;
  } 

  @media screen and (max-width: 640px) {
    height: 10vh;
  }
`;

export const Header = styled.h1`
  color: #af9377;
  font-size: 35px;

  @media screen and (max-width: 1008px) {
    font-size: 20px;
    margin: 0;
  } 

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;
