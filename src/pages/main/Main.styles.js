import styled, { keyframes, css } from "styled-components";

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opactiy: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opactiy: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  background-color: black;
  min-height: 100vh;
`;

export const BodyContainer = styled.div`
  background-color: black;
  padding: 5px 100px;

  @media (max-width: 768px) {
    padding: 1vh 10vh;
  }

  @media (max-width: 425px) {
    padding: 0.5vh 5vh;
  }
  @media (max-width: 420px) {
    padding: 0.5vh 5vh;
}
  @media (max-width: 375px) {
    padding: 0.3vh 5vh;
  }
  @media (max-width: 320px) {
    padding: 0.2vh 5vh;
  }
`;

export const BodyTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 12vh;

  @media (max-width: 1024px) {
    font-size: 8vh;
  }

  @media (max-width: 768px) {
    font-size: 5vh;
  }

  @media (max-width: 425px) {
    font-size: 3vh;
  }
  @media (max-width: 375px) {
    font-size: 3vh;
  }
  @media (max-width: 320px) {
    font-size: 2.5vh;
  }
`;

export const BodyTitleRIGHT = styled.h1`
  animation: ${slideUp} 0.5s ease-out 0s 1;
  color: white;
  text-align: Right;
  font-size: 25vh;

  @media (max-width: 1024px) {
    font-size: 18vh;
  }

  @media (max-width: 768px) {
    font-size: 15vh;
  }

  @media (max-width: 425px) {
    font-size: 7.5vh;
  }
  @media (max-width: 375px) {
    font-size: 7vh;
  }
  @media (max-width: 320px) {
    font-size: 5vh;
  }
`;

export const BodyTitleLEFT = styled.h1`
  animation: ${slideUp} 0.5s ease-out 0s 1;
  color: white;
  text-align: Left;
  font-size: 25vh;

  @media (max-width: 1024px) {
    font-size: 18vh;
  }

  @media (max-width: 768px) {
    font-size: 15vh;
  }

  @media (max-width: 425px) {
    font-size: 7.5vh;
  }
  @media (max-width: 375px) {
    font-size: 7vh;
  }
  @media (max-width: 320px) {
    font-size: 5vh;
  }
`;

export const RowContainer = styled.div`
  justify-content: center;
  margin: 0 5vh;
  display: flex;
  flex-direction: row;
`

export const ColumnContainer = styled.div`
  justify-content: center;
  margin: 0 30px;
  display: flex;
  flex-direction: column;
  padding: 10px 60px;

  @media (max-width: 768px) {
    padding: 6vh;
  }
    
  @media (max-width: 425px) {
        padding: 1vh 3vh;
  }
  @media (max-width: 375px) {
        padding: 0.8vh 1vh;
  }
  @media (max-width: 320px) {
        padding: 0.8vh 0.5vh;
  }
`

export const BoxContainer = styled.div`
  justify-content: space-around;
  margin-top: 100px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  
  gap: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 425px) {
    margin-top: 50px;
  }
`;

export const BoxTitle3 = styled.h3`
  text-align: center;
  font-size: 4vh;

  @media (max-width: 768px) {
    font-size: 15vh;
  }

  @media (max-width: 425px) {
    font-size: 10vh;
  }
  @media (max-width: 375px) {
    font-size: 8vh;
  }
  @media (max-width: 320px) {
    font-size: 6vh;
  }
`;

export const BoxTitle = styled.h1`
  font-size: 6vh;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 6vh;
  }

  @media (max-width: 425px) {
    font-size: 5vh;
  }
  @media (max-width: 375px) {
    font-size: 5vh;
  }
  @media (max-width: 320px) {
    font-size: 4vh;
  }
  
`;

export const BoxText = styled.p`
  margin: 0 0 5vh 0;
  font-size: 4vh;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 4vh;
    text-align: center;
  }
  @media (max-width: 425px) {
    font-size: 3.5vh;
    text-align: center;
  }
  @media (max-width: 375px) {
    font-size: 3vh;
    text-align: center;
  }
`;

export const SlidingBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.isOpen &&
    css`
      transform: translateX(0);
    `}
`;


export const ButtonContainer = styled.div`
  margin-right: 5vh;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border: 0.3px solid #ccc;

  &:hover {
    background-color: #EDF1F5;
    color: black;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: none;
  border: none;
  font-size: 1em;
  cursor: pointer;
`;

export const Input = styled.input`
  background-color: #EFEFEF;
  padding: 2vh;
  margin-bottom: 2vh;
  border-radius: 4px;
  border: 0.3px solid #ccc;
  box-sizing: border-box;
`;

export const ErrorText = styled.p`
  color: red;
  text-align: left;
`;
export const FormContainer = styled.form`
  background-color: white;
  border-radius: 30px;
  margin: 20vh 5vh;
  display: flex;
  flex-direction: column; /* 수직 정렬 */
`;

export const FormTitle = styled.h1`
  text-align: left;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2vh; /* 로고 상하 마진 */
  img {
    height: 8vh; /* 로고 높이 조정 */
    width: auto; /* 가로 비율 자동 조정 */
  }
`;
