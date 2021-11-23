import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Title>The Online Pokedex</Title>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  background-color: #3f3f3f;
  padding: 20px;
  text-align: center;

  /* Media query */
  @media (max-width: 576px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  font-weight: 500;
  /* Media query */
  @media (max-width: 576px) {
    font-size: 38px;
  }
`;
