import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { CgHome } from "react-icons/cg";
// import { GoGraph } from "react-icons/go";
import { GoSearch } from "react-icons/go";
// import logo from "../Assets/temporaryLogo-removebg-preview.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderCtn>
      {" "}
      <GoSearch size="80%" color="white" onClick={() => navigate("/")} />
      {/* <GoGraph size="80%" color="white" onClick={() => navigate("/rank")} /> */}
      <CgHome size="80%" color="white" onClick={() => navigate("/")} />
      {/* <img src={logo} alt={"avatarshop"} onClick={() => navigate("/avatar")} /> */}
      <CgProfile size="90%" color="white" onClick={() => navigate("/Login")} />
    </HeaderCtn>
  );
};

const HeaderCtn = styled.div`
  width: 100%;
  top: 0;
  position: relative;
  z-index: 999;
  height: 4vh;
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
