import styled from "styled-components";
// import LayoutLogo from "../Assets/temporaryLogo.png"
import Header from "./Header";
interface Props {
  children: React.ReactNode;
  // jsx 내에서 사용할 수 있는 모든 요소의 타입
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Wrap>
      <Header />
      {/* <LogoBox src={require("../Assets/temporaryLogo.png").default} /> */}
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  top: 0;
  overflow-x: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: #554979;
  z-index: -1;
  &.logo {
    position: absolute;
    border: 2px solid white;
  }
`;

// const LogoBox = styled.img`
//   @media only screen and (min-width: 1200px) {
//     display: block;
//     position: absolute;
//     width: 20%;
//     /* left: 13%; */
//     top: 35%;
//   }
//   display: none;
// `;

const Container = styled.div`
  background-color: gray;
  z-index: 999;
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid var(--primary);
  border-right: 2px solid var(--primary);
  /* @media only screen and (min-width: 50vw) {
    margin-left: 25%;
  } */
`;
