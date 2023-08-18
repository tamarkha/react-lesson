import styled from "styled-components";
export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 99999;
  overflow-y: scroll;
  max-height: 100vh;
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  z-index: 99999;
  background: rgba(49, 49, 49, 0.8);
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  border-radius: 3px;
  max-width: 900px;
  width: 600px;
  min-width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 20px 0 rgba(#999, 0.25);

  @media screen and (max-width: 640px) {
    width: 450px;
  }

  @media (max-width: 1007px) {
    width: 500px;
  }

  @media (max-width: 415px) {
    width: 180px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
  line-height: 4;
  padding-bottom: 25px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;

export const LabelTitle = styled.label`
  font-size: 14px;
  color: #b8b8b8;
  font-family: "Poppins", sans-serif;
`;

export const InputTitle = styled.input`
  border: none;
  border-bottom: 2px solid #dedede;
  padding: 8px 10px;

  :focus {
    outline: none;
  }
`;

export const LabelDescription = styled.label`
  font-size: 14px;
  color: #b8b8b8;
  font-family: "Poppins", sans-serif;
`;

export const InputDescription = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px 10px;
  box-sizing: border-box;
  border: 1px solid black;
  background-color: #f8f8f8;
  resize: none;
  :focus {
    outline: none;
  }
`;

export const LabelImage = styled.label`
  font-size: 14px;
  color: #b8b8b8;
  font-family: "Poppins", sans-serif;
`;

export const InputFile = styled.input``;

export const InputImage = styled.input``;

export const Close = styled.span`
  font-size: 30px;
  font-weight: 600;
  display: inline-block;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

export const SaveBtn = styled.button`
  background-color: #347ab6;
  font-size: 12px;
  color: white;
  border: 2px solid #347ab6;
  padding: 15px 24px;
  border-radius: 4px;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  background-color: white;
  color: black;
  font-size: 12px;
  border: 2px solid #d5d5d5;
  padding: 15px 24px;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;

  :hover {
    background-color: green;
    border: none;
    color: white;
  }
`;
