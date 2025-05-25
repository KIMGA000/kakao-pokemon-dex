import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import pokeballImg from "../assets/pokeball.png";

const Container = styled.div`
  background: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 20px auto;
  max-width: 1200px;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;
  justify-items: center;
`;

const Card = styled.div`
  width: 100px;
  height: 200px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const NameText = styled.p`
  margin: 0;
  font-weight: bold;
`;

const NumberText = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export default function Dashboard({ pokemons, onRemove }) {
  const navigate = useNavigate();

  const filledPokemons = [...pokemons];
  while (filledPokemons.length < 6) {
    filledPokemons.push(null);
  }

  const handleCardClick = (id) => {
    navigate(`/detail?id=${id}`);
  };

  const handleRemoveClick = (e, id) => {
    e.stopPropagation();
    onRemove(id);
  };

  return (
    <Container>
      <h2>나만의 포켓몬 ({pokemons.length} / 6)</h2>
      <Grid>
        {filledPokemons.map((p, index) => (
          <Card
            key={index}
            onClick={() => {
              if (p) handleCardClick(p.id);
            }}>
            {p ? (
              <>
                <img src={p.img_url} alt={p.korean_name} />
                <NameText>{p.korean_name}</NameText>
                <NumberText>No. {String(p.id).padStart(3, "0")}</NumberText>
                <button onClick={(e) => handleRemoveClick(e, p.id)}>
                  삭제
                </button>
              </>
            ) : (
              <Image src={pokeballImg} alt="빈 칸" />
            )}
          </Card>
        ))}
      </Grid>
    </Container>
  );
}
