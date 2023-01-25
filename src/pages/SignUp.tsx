import { useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";
import { signUpApi } from "../instance";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRef } from "react";

export interface postCard {
  title: string;
  content: string;
  location: string;
  date: string | null | undefined;
  time: [Date | null | undefined, Date | null | undefined];
  map: string;
  partySize: number;
}
export interface FormValue {
  userId: string;
  nickName: string;
  email: string;
  password: string;
  confirm: string;
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValue>();

  const passwordRef = useRef<string | null>(null);
  passwordRef.current = watch("password");

  const onSubmitHandler: SubmitHandler<FormValue> = (data) => {
    console.log(data);

    postSignUp({
      userId: data.userId,
      nickName: data.nickName,
      email: data.email,
      password: data.password,
      confirm: data.confirm,
    });
  };

  const [alert, setAlert] = useState(false);
  const [content, setContent] = useState<string>();
  const [address, setAddress] = useState<string>();

  const postSignUp = async (payload: FormValue) => {
    try {
      const data = await signUpApi.postSignUp(payload);
      console.log(data);
      setAlert(true);
      setContent("회원가입을 축하드립니다!");
      setAddress("/");
    } catch (error) {
      // alert(error.response.data.err);
      // setValue("nickName", "");
    }
  };

  return (
    <Layout>
      <MainBox className="Scroll">
        <LoginBox>
          <LoginTitle>회원가입</LoginTitle>
          <InputForm onSubmit={handleSubmit(onSubmitHandler)}>
            <InputBox>
              {" "}
              <SignUpLabel>
                아이디
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="userId"
                type="text"
                {...register("userId", {
                  required: "아이디는 필수 입력입니다.",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,10}$/,
                    message: "영문 대소문자, 숫자 포함 4~10자리를 입력해주세요",
                  },
                })}
              />
            </InputBox>
            {errors.userId && errors.userId.type === "required" && (
              <SignUpError>아이디는 필수 입력입니다</SignUpError>
            )}
            {errors.userId && errors.userId.type === "pattern" && (
              <SignUpError>
                영문 대소문자, 숫자 포함 4~10자리를 입력해주세요
              </SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                닉네임
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="nickname"
                type="text"
                {...register("nickName", {
                  required: "닉네임은 필수 입력입니다.",
                  pattern: {
                    value: /^[가-힣|a-z|A-Z|\d]{2,10}$/,
                    message: "한글,영어대소문자,숫자 2~10자리를 입력해주세요",
                  },
                })}
              />
            </InputBox>
            {errors.nickName && errors.nickName.type === "required" && (
              <SignUpError>닉네임은 필수 입력입니다</SignUpError>
            )}
            {errors.nickName && errors.nickName.type === "pattern" && (
              <SignUpError>
                한글,영어대소문자,숫자 2~10자리를 입력해주세요
              </SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                이메일
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="email"
                type="email"
                {...register("email", {
                  required: "이메일은 필수 입력입니다.",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "이메일 형식에 맞지 않습니다.",
                  },
                })}
              />
              {/* {errors.email && <small role="alert">{errors.email.pattern.message}</small>} */}
            </InputBox>{" "}
            {errors.email && errors.email.type === "required" && (
              <SignUpError>이메일은 필수 입력입니다</SignUpError>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <SignUpError>이메일 형식에 맞지 않습니다</SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                비밀번호
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="password"
                type="string"
                {...register("password", {
                  required: "비밀번호는 필수 입력입니다.",
                  // pattern: {
                  //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,20}$/,
                  //   message: "영문 대소문자, 숫자 포함 4~20자리를 입력해주세요",
                  // },
                })}
              />
            </InputBox>
            {errors.password && errors.password.type === "required" && (
              <SignUpError>비밀번호는 필수 입력입니다</SignUpError>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <SignUpError>
                영문 대소문자, 숫자 포함 4~20자리를 입력해주세요
              </SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                비밀번호 확인
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="passwordConfirm"
                type="string"
                {...register("confirm", {
                  required: "비밀번호는 필수 입력입니다.",
                  // validate: (value) => value === passwordRef.current,
                })}
              />
            </InputBox>
            {errors.confirm && errors.confirm.type === "validate" && (
              <SignUpError>비밀번호와 다릅니다</SignUpError>
            )}
            <ButtonCtn>
              <Buttons type="submit">가입 완료</Buttons>
            </ButtonCtn>{" "}
          </InputForm>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 80%;
  margin: 20% 10% 10% 10%;
  background-color: #e4ccff;
`;

const LoginTitle = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 40px;
`;

const InputForm = styled.form`
  /* background-color: green; */
  /* display: flex; */
  /* flex-direction: column; */
  position: absolute;
  top: 20%;
  height: 20%;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  /* background-color: gray; */
`;
const SignUpLabel = styled.label`
  /* background-color: brown; */
  width: 40%;
  display: flex;
  word-break: normal;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 20px;
`;
const SignUpInput = styled.input`
  display: block;
  width: 100%;
  height: 10%;
  margin: 5% 5% 5% 5%;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  border: 3px solid gray;
  background-color: #e4ccff;
`;
const SignUpError = styled.div`
  display: flex;
  color: red;
  /* vertical-align: middle; */
  /* width: 70%;
  height: 10%;
  margin: 5% 5% 5% 5%;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  border: 3px solid gray;
  background-color: #e4ccff; */
`;

const ButtonCtn = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: blue; */
  position: absolute;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 15%;
  width: 80%;
`;
const Buttons = styled.button`
  width: 35%;
  /* height: 100%; */
  border-radius: 25px;
  border: none;
  font-size: 20px;
  background-color: #9747ff;
  color: white;
`;
const SocialContainer = styled.div``;
