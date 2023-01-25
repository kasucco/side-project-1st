import * as React from "react";
import styled from "styled-components";
import Layout from "../common/Layout";
import { SubmitHandler, useForm } from "react-hook-form";
import { postCard } from "./SignUp";
import { useState } from "react";
import { postsApi } from "../instance";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import dayjs, { Dayjs } from "dayjs";

const Form = () => {
  const [value, setValue] = React.useState<Dayjs | null | undefined>(
    dayjs("2023-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<postCard>();

  const onSubmitHandler: SubmitHandler<postCard> = (data) => {
    console.log(data);
    CreatePost({
      title: data.title,
      content: data.content,
      location: "임시",
      date: value?.toISOString(),
      time: [value?.toDate(), value?.toDate()],
      map: data.map,
      partySize: data.partySize,
    });
  };

  const [alert, setAlert] = useState(false);
  const [content, setContent] = useState<string>();
  const [address, setAddress] = useState<string>();

  const CreatePost = async (payload: postCard) => {
    try {
      const data = await postsApi.createPost(payload);
      console.log(data);
      setAlert(true);
      setContent("게시글을 작성하였습니다");
      setAddress("/");
    } catch (error) {
      // alert(error.response.data.err);
      // setValue("nickName", "");
    }
  };

  return (
    <Layout>
      <Wrap>
        <LoginBox>
          <LoginTitle>모집글 작성</LoginTitle>
          <InputForm onSubmit={handleSubmit(onSubmitHandler)}>
            <InputBox>
              {" "}
              <SignUpLabel>
                제목
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="title"
                type="text"
                {...register("title", {
                  required: "제목은 필수 입력입니다.",
                })}
              />
            </InputBox>
            {errors.title && errors.title.type === "required" && (
              <SignUpError>아이디는 필수 입력입니다</SignUpError>
            )}
            {errors.title && errors.title.type === "pattern" && (
              <SignUpError></SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                내용
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="content"
                type="text"
                {...register("content", {
                  required: "내용은 필수 입력입니다.",
                })}
              />
            </InputBox>
            {errors.content && errors.content.type === "required" && (
              <SignUpError>내용은 필수 입력입니다</SignUpError>
            )}
            {errors.content && errors.content.type === "pattern" && (
              <SignUpError></SignUpError>
            )}
            {/* <InputBox>
              {" "}
              <SignUpLabel>
                날짜
              </SignUpLabel>
              <SignUpInput
                id="date"
                type="text"
                {...register("date", {
                  required: "날짜는 필수 입력입니다.",
                 
                })}
              />
            </InputBox>
            {errors.date && errors.date.type === "required" && (
              <SignUpError>날짜는 필수 입력입니다</SignUpError>
            )}
            {errors.date && errors.date.type === "pattern" && (
              <SignUpError></SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                시간
              </SignUpLabel>
              <SignUpInput
                id="time"
                type="text"
                {...register("time", {
                  required: "시간는 필수 입력입니다.",
                })}
              />
            </InputBox> */}
            {/* {errors.time && errors.time.type === "required" && (
              <SignUpError>비밀번호와 다릅니다</SignUpError>
            )} */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                label="Date mobile"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
              <TimePicker
                label="Time"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <InputBox>
              {" "}
              <SignUpLabel>
                장소
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="map"
                type="text"
                {...register("map", {
                  required: "장소는 필수 입력입니다.",
                })}
              />
              {/* {errors.map && <small role="alert">{errors.map.pattern.message}</small>} */}
            </InputBox>{" "}
            {errors.map && errors.map.type === "required" && (
              <SignUpError>장소는 필수 입력입니다</SignUpError>
            )}
            {errors.map && errors.map.type === "pattern" && (
              <SignUpError></SignUpError>
            )}
            <InputBox>
              {" "}
              <SignUpLabel>
                인원
                {/* <span style={{ color: "red" }}>*</span> */}
              </SignUpLabel>
              <SignUpInput
                id="partyMember"
                type="number"
                {...register("partySize", {
                  required: "인원은 필수 입력입니다.",
                })}
              />
              {/* {errors.partySize && <small role="alert">{errors.partySize.pattern.message}</small>} */}
            </InputBox>{" "}
            {errors.partySize && errors.partySize.type === "required" && (
              <SignUpError>인원은 필수 입력입니다</SignUpError>
            )}
            {errors.partySize && errors.partySize.type === "pattern" && (
              <SignUpError></SignUpError>
            )}
            <ButtonCtn>
              <Buttons type="submit">작성완료</Buttons>
            </ButtonCtn>{" "}
          </InputForm>
        </LoginBox>
      </Wrap>
    </Layout>
  );
};

export default Form;

const Wrap = styled.div`
  height: 90%;
  background-color: #e4ccff;
  width: 90%;
  margin: 5% 5% 5% 5%;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  :hover {
    box-shadow: 0px 0px 0px 0px;
  }
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
  width: 90%;
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
