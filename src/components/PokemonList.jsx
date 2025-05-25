import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  display: grid;
  gap: 20px;
`;

export default function PokemonList() {
  return (
    <Grid>
      {MOCK_DATA.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </Grid>
  );
}
