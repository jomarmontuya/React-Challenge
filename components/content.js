import styled from "styled-components";
import Card from "../components/card";

function Content(props) {
  const pokemonData = props.pokemonData;
  const onLoad = props.onLoad;
  return (
    <Wrapper default={!pokemonData || onLoad}>
      {pokemonData ? (
        pokemonData.map((pokemon) => {
          return <Card key={pokemon.number} data={pokemon} />;
        })
      ) : (
        <>
          {onLoad ? (
            <Message>Cathing Them All...</Message>
          ) : (
            <Message>
              Something went wrong. We weren&lsquo;t <br /> able to find any
              pokemon
            </Message>
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Content;

const Wrapper = styled.div`
  padding: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  align-items: center;
  grid-gap: 10px;
  flex: 0.5;

  @media (max-width: 576px) {
    padding: 30px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  ${(props) =>
    props.default &&
    `
    display: flex;
    justify-content: center;
  
    `}
`;

const Message = styled.div`
  text-align: center;

  font-size: 22px;
`;
