import styled from "styled-components";

function Card(props) {
  const { image, name, number, types } = props.data;

  return (
    <CardWrapper>
      <img
        style={{ width: "100%", height: "100%" }}
        src={`/${image.url}`}
        alt={name}
      />
      <PokemonID>{`#${number}`}</PokemonID>
      <PokemonName>{name}</PokemonName>
      <ElementWrapper>
        {types.map((type) => (
          <Element element={type} key={type}>
            {type}
          </Element>
        ))}
      </ElementWrapper>
    </CardWrapper>
  );
}

export default Card;

const CardWrapper = styled.div`
  background-color: #747474;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 290px;
  border-radius: 8px;
  padding: 20px;
  margin: auto;

  @media (max-width: 576px) {
    max-width: 200px;
  }
`;
const PokemonID = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
`;
const PokemonName = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  text-transform: capitalize;
`;
const ElementWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const Element = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 13px;
  padding: 0px 15px;
  background-color: green;
  border-radius: 100px;
  margin: 0px 5px;

  ${(props) =>
    props.element == "Poison" &&
    `
        background-color: #C27EBC;
    `}
  ${(props) =>
    props.element == "Grass" &&
    `
        background-color: #83C27E;
    `}
   ${(props) =>
    props.element == "Fire" &&
    `
        background-color: #FD8900;
    `}
    ${(props) =>
    props.element == "Water" &&
    `
        background-color: #051BD9;
    `}
    ${(props) =>
    props.element == "Bug" &&
    `
        background-color: #99B100;
    `}
`;
