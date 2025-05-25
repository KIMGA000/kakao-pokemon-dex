import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePokemonContext } from "../context/PokemonContext";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
  cursor: pointer;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  background: #3b4cca;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { handleAdd } = usePokemonContext();

  return (
    <Card onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
      <img
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        width="100"
        onClick={() => navigate(`/detail/${pokemon.id}`)}
      />
      <p>{pokemon.korean_name}</p>
      <p>No. {String(pokemon.id).padStart(3, "0")}</p>
      <p>{pokemon.types.join(", ")}</p>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          handleAdd(pokemon);
        }}>
        추가
      </Button>
    </Card>
  );
}
