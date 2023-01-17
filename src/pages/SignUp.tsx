import { useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";
import { signUpApi } from "../instance";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [alert, setAlert] = useState(false);
  // const [content, setContent] = useState<string>();
  // const [address, setAddress] = useState<string>();

  // const postSignUp = async (payload) => {
  //   try {
  //     const data = await signUpApi.postSingup(payload);
  //     console.log(data);
  //     setAlert(true);
  //     setContent("회원가입을 축하드립니다!");
  //     setAddress("/");
  //   } catch (error) {
  //     alert(error.response.data.err);
  //     setValue("nickName", "");
  //   }
  // };

  return (
    <Layout>
      <MainBox className="Scroll">
        <LoginBox>
          <LoginTitle>회원가입</LoginTitle>
          <InputCtn
            onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
          >
            <InputBox>
              {" "}
              <SignUpLabel>아이디</SignUpLabel>
              <SignUpInput
                id="id"
                type="text"
                placeholder="아이디를 입력하세요"
                {...register("id", {
                  required: "아이디는 필수 입력입니다.",
                  minLength: {
                    value: 6,
                    message: "6자리 이상 아이디를 사용하세요.",
                  },
                })}
              />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>닉네임</SignUpLabel>
              <SignUpInput
                id="nickName"
                type="text"
                placeholder="닉네임를 입력하세요"
                {...register("nickName", {
                  required: "닉네임은 필수 입력입니다.",
                  minLength: {
                    value: 2,
                    message: "2자리 이상 닉네임을 사용하세요.",
                  },
                })}
              />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>이메일</SignUpLabel>
              <SignUpInput
                id="email"
                type="email"
                placeholder="이메일를 입력하세요"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              {/* {errors.email && <small role="alert">{errors.email.message}</small>} */}
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>비밀번호</SignUpLabel>
              <SignUpInput
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  minLength: {
                    value: 8,
                    message: "8자리 이상 비밀번호를 사용하세요.",
                  },
                })}
              />
            </InputBox>
            <InputBox>
              {" "}
              <SignUpLabel>비밀번호 확인</SignUpLabel>
              <SignUpInput
                id="password"
                type="password"
                placeholder="비밀번호를 한번 더 입력하세요"
                {...register("password")}
              />
            </InputBox>
            <ButtonCtn>
              <Buttons type="submit">가입 완료</Buttons>
            </ButtonCtn>{" "}
          </InputCtn>
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

const InputCtn = styled.form`
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
  top: 90%;
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
