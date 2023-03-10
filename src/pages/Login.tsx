import { useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";
import useInputs from "../Hooks/useInputs";
import { loginApi } from "../instance";

export interface userState {
  userId?: string;
  password?: string;
}

const Login = () => {
  const [userId, setUserId, onChangeUserId] = useInputs<string>("");
  const [password, setPassword, onChangePassword] = useInputs<string>("");
  const [error, setError] = useState();
  const [alert, setAlert] = useState(false);
  const [content, setContent] = useState<string>();
  const [address, setAddress] = useState<string>();

  const postLogin = async (payload: userState) => {
    try {
      const { data } = await loginApi.postLogin(payload);
      console.log(data.nickName);
      if (data.accessToken) {
        setAlert(true);
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refresh_token);
        sessionStorage.setItem("nickName", data.nickName);
        setContent("환영합니다!");
      }
      setAddress("/main");
    } catch (error) {
      setAlert(true);
      setContent("다시 로그인해주세요");
      console.log(error);
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(error);
    postLogin({ userId: userId, password: password });
  };

  return (
    <Layout>
      <MainBox className="Scroll">
        <LoginForm onSubmit={onSubmitHandler}>
          <LoginTitle>로그인</LoginTitle>
          <InputCtn>
            <LoginInput
              value={userId}
              name="userId"
              onChange={setUserId}
              placeholder="아이디를 입력하세요"
            />
            <LoginInput
              value={password}
              name="userId"
              onChange={setPassword}
              placeholder="비밀번호를 입력하세요"
            />
          </InputCtn>
          <ButtonCtn>
            <Buttons>로그인</Buttons>
            <Buttons>회원가입</Buttons>
          </ButtonCtn>
        </LoginForm>
      </MainBox>
    </Layout>
  );
};

export default Login;

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

const LoginForm = styled.form`
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
  position: relative;
  top: 15%;
  height: 20%;
`;
const LoginInput = styled.input`
  display: block;
  width: 85%;
  height: 20%;
  margin: 10% 5% 10% 5%;
  border-radius: 15px;

  text-align: center;
  font-size: 20px;
  border: 5px solid #9747ff;
  background-color: #e4ccff;
`;

const ButtonCtn = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: blue; */
  position: relative;
  top: 15%;
  height: 5%;
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
