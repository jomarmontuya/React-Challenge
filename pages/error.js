import styled from "styled-components";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

export default function Home() {
  return (
    <PokedexWrapper>
      <Header />
      <Content />
      <Footer default />
    </PokedexWrapper>
  );
}

const PokedexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
