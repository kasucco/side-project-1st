import Layout from "../common/Layout";
import styled from "styled-components";

import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChattingApi } from "../instance";
import { useEffect } from "react";
import useInputs from "../Hooks/useInputs";
import { ChangeEvent, useState } from "react";
import { useRef } from "react";
const Chat = () => {
  const nickName = sessionStorage.getItem("nickName");
  const param = useParams() as { id: string };
  const socket = io("http://35.162.250.189");
  const [message, setMessage, onChange] = useInputs<
    ChangeEvent<HTMLInputElement> | string
  >("");
  const [chatArr, setChatArr] = useState([]);

  //채팅이 갱신될 때마다 맨 밑으로 내리기
  const scrollRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatArr]);

  //보내기 버튼 눌렀을 때
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("chatMessage", {
      nickName: nickName,
      message: message,
      room: param.id,
      userAvatar: "temporary",
    });
  };

  //채팅 가져오기
  const getChat = async (payload: string) => {
    try {
      const { data } = await ChattingApi.getChat(payload);
      console.log(data);
      roomSubmit();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChat(param.id);
  }, []);

  const roomSubmit = () => {
    socket.emit("joinRoom", {
      nickName: nickName,
      userAvatar: "temporary",
      room: param.id,
    });
  };

  return (
    <Layout>
      <MainBox>
        <Wrap>
          <ChatForm onSubmit={onSubmitHandler}>
            <ChatInput
              placeholder="메세지를 입력하세요"
              value={message}
              name="message"
              onChange={onChange}
            />
            <Buttons>보내기</Buttons>
          </ChatForm>
        </Wrap>
      </MainBox>
    </Layout>
  );
};

export default Chat;

const MainBox = styled.div`
  /* top: 4vh; */
  background-color: #dcf3e7;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;
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

const ChatForm = styled.form`
  background-color: mintcream;
  position: absolute;
  top: 10%;
`;
const ChatInput = styled.input``;

const Buttons = styled.button`
  width: 35%;
  /* height: 100%; */
  border-radius: 25px;
  border: none;
  font-size: 20px;
  background-color: #9747ff;
  color: white;
`;
