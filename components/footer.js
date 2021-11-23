import styled from "styled-components";

function Footer(props) {
  return (
    <FooterWrapper default={props.default}>
      <FooterText>
        Copyright &copy; 2020 React Code Challenge. All Rights Reserved. <br />
        Use of pokemon images performed under fair use. Not for <br /> sale or
        redistribution
      </FooterText>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  background-color: #3f3f3f;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;

  @media (min-width: 1900px) {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  ${(props) =>
    props.default &&
    `
    position: fixed;
    bottom: 0;
    width: 100%;
    `}
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 13px;
  text-align: center;
`;
