import Layout from "../common/Layout";
import styled from "styled-components";

import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChattingApi } from "../instance";
import { useEffect } from "react";
import useInputs from "../Hooks/useInputs";
const Chat = () => {
  const nickName = sessionStorage.getItem("nickName");
  const { param } = useParams();
  const socket = io(process.env.REACT_APP_BACK_SERVER);
  const [message, setMessage, onChange] = useInputs();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (message.trim("").length !== 0) {
      socket.emit("chatMessage", {
        nickName: nickName,
        message: message,
        room: param.id,
        userAvatar: "temporary",
      });
    } else {
      alert("메세지를 입력해주세요");
    }
    setMessage({ message: "" });
  };
  const getChat = async (payload) => {
    try {
      const { data } = await ChattingApi.getChat(payload);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getChat(param.id);
  }, []);

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
