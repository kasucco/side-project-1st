import { useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";

export interface postCard {
  title: string;
  content: string;
  location: string;
  cafe: string;
  date: string;
  time: string;
  // map: string;
  partyMember: number;
}

const SignUp = () => {
  return (
    <Layout>
      <MainBox className="Scroll">
        <LoginBox>
          <LoginTitle>회원가입</LoginTitle>
          <InputCtn>
            <InputBox>
              {" "}
              <SignUpLabel>아이디</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>닉네임</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>비밀번호</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>비밀번호 확인</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>전화번호</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>나이</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>주소</SignUpLabel>
              <SignUpInput />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>성별</SignUpLabel>
              <SignUpInput />
            </InputBox>
          </InputCtn>
          <ButtonCtn>
            <Buttons>가입 완료</Buttons>
          </ButtonCtn>
        </LoginBox>
      </MainBox>
    </Layout>
  );
};

export default SignUp;

const MainBox = styled.div`
  background-color: #dcf3e7;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

const LoginBox = styled.div`
  justify-content: center;
  height: 70%;
  width: 80%;
  margin: 20% 10% 10% 10%;
  background-color: #e4ccff;
`;

const LoginTitle = styled.div`
  position: relative;
  top: 10%;
  text-align: center;
  font-size: 40px;
`;

const InputCtn = styled.div`
  /* background-color: green; */
  position: absolute;
  top: 20%;
  height: 20%;
`;

const InputBox = styled.div`
  display: flex;
`;
const SignUpLabel = styled.label`
  /* background-color: brown; */
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const SignUpInput = styled.input`
  display: block;
  width: 70%;
  height: 10%;
  margin: 5% 5% 5% 5%;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  border: 3px solid gray;
  background-color: #e4ccff;
`;

const ButtonCtn = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: blue; */
  position: absolute;
  top: 60%;
  height: 5%;
  width: 80%;
`;
const Buttons = styled.button`
  width: 35%;
  border-radius: 25px;
  border: none;
  font-size: 20px;
  background-color: #9747ff;
  color: white;
`;
const SocialContainer = styled.div``;
