import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderCtn>
      {" "}
      <CursorDiv>
        <RegisterImage
          src="../img/registerImgNoBg.png"
          alt="register"
          height="40vh"
          onClick={() => navigate("/form")}
        />
      </CursorDiv>
      <LogoImage
        src="../img/eyesLogo.png"
        alt="home"
        height="60vh"
        onClick={() => navigate("/")}
      />
      <div>
        <img
          src="../img/myPartyImgNoBg.png"
          alt="myParty"
          height="50vh"
          onClick={
            () => alert("개발중")
            // navigate("/Login")
          }
        />
        <img
          src="../img/myPageImg.png"
          alt="myPage"
          height="50vh"
          onClick={() => navigate("/Login")}
        />
      </div>
    </HeaderCtn>
  );
};
const CursorDiv = styled.div`
  :hover {
    cursor: pointer;
  }
`;
const RegisterImage = styled.img`
  position: relative;
  left: 20px;
`;
const LogoImage = styled.img`
  z-index: 1200;
  position: relative;
  left: 20px;
`;
const HeaderCtn = styled.div`
  width: 100%;
  top: 0;
  position: relative;
  z-index: 999;
  height: 10vh;
  background-color: #9747ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px 20px; */
  bottom: 0;
  width: 100%;
  max-width: 540px;
  box-shadow: 1px 1px 15px 3px black;
  :hover {
    cursor: pointer;
  }
  .logo {
    width: 6.7%;
    margin: 0 6%;
    @media only screen and (min-width: 1200px) {
      width: 6.5%;
    }
  }
`;

export default Header;
