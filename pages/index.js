import styled from "styled-components";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  let data = "";
  isLoading
    ? (data = <Content onLoad />)
    : (data = <Content pokemonData={pokemonData} />);

  useEffect(() => {
    fetch("http://localhost:3000/api/pokedex")
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data.entries);
        setIsLoading(false);
      })
      .catch(() => router.push("/error"));
  }, [router]);

  return (
    <PokedexWrapper>
      <Header />
      {data}
      <Footer default={isLoading} />
    </PokedexWrapper>
  );
}

const PokedexWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
