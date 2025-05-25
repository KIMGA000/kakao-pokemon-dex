import { useLocation, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mock";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default function Detail() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const id = parseInt(query.get("id"));
  const pokemon = MOCK_DATA.find((p) => p.id === id);

  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  return (
    <Container>
      <DetailBox>
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>타입: {pokemon.types.join(", ")}</p>
        <p>{pokemon.description}</p>
        <button onClick={() => navigate("/dex")}>뒤로 가기</button>
      </DetailBox>
    </Container>
  );
}
