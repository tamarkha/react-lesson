import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  margin-top: 100px;

  @media (max-width: 1007px) {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
`;

export const HeaderText = styled.h3`
  text-align: center;
  font-size: 25px;
  margin-top: 60px;
  margin-bottom: 100px;
  border-bottom: 2px solid #af9377;
  font-family: "Sora", sans-serif;
  padding-bottom: 15px;
  color: #2c2640;
  font-style: italic;
`;

export const Card = styled.div`
 height:300px;
 margin: 10px;
 transition: 0.3s;
 display: flex;
 margin-bottom: 20px;
 font-size: 18px;
 overflow: hidden;
 cursor: pointer;
 box-shadow: 0 4px 21px -12px rgba(0, 0, 0, .66);
 transition: box-shadow 0.2s ease, 
 height: 300px;
 margin-bottom: 40px;
 border-radius: 10px;

 &:hover {
  box-shadow: 0 34px 32px -33px rgba(0, 0, 0, .18);
	transform: translate(0px, -3px);
  }

  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
}
`;

export const CardInfo = styled.div`
  width: 60%;
  padding: 40px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

export const CardTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 5px;
  font-family: "Poppins", sans-serif;
`;
export const CardDescription = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  @media screen and (max-width: 640px) {
    height: auto;
  }
`;

export const CardImgSpace = styled.div`
  width: 40%;
  @media screen and (max-width: 640px) {
    width: 30%;
  }
`;

export const Button = styled.button`
  padding: 14px 40px;
  background-color: #116cc9;
  color: #fff;
  border: none;
  margin: 40px 0;
  cursor: pointer;
`;
