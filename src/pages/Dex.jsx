import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export default function Dex() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <Dashboard pokemons={selected} onRemove={handleRemove} />
      <PokemonList data={MOCK_DATA} onAdd={handleAdd} />
    </Container>
  );
}
