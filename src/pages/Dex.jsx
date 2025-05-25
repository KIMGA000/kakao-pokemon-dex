import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";
import { usePokemonContext } from "../context/PokemonContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export default function Dex() {
  const { selected, handleAdd, handleRemove } = usePokemonContext();

  return (
    <Container>
      <Dashboard pokemons={selected} onRemove={handleRemove} />
      <PokemonList onAdd={handleAdd} />
    </Container>
  );
}
