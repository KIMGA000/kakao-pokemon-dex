import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/pokemon-logo-RN0wntMB.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StartImg = styled.img`
  width: 600px;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  border: none;
  padding: 1rem 2rem;
  background: red;
  cursor: pointer;
  /*
  padding:10px 20px;
  font-size:18px;
  cursor:pointer;
  border-radius:5px;*/
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <StartImg src={logo} alt="포켓몬 로고"></StartImg>
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  );
}
