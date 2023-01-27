import Layout from "../common/Layout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { postsApi } from "../instance";
import { ContentBoxProps } from "../components/MainCard";

const Detail = () => {
  const navigate = useNavigate();
  const param = useParams();

  console.log(param);
  const [detail, setDetail] = useState({
    _id: "",
    title: "",
    content: "",
    location: "",
    date: "",
    time: [,],
    map: "",
    partySize: null,
  });

  const getDetail = async (payload: string | undefined) => {
    try {
      if (payload) {
        const { data } = await postsApi.getDetailId(payload);
        setDetail(data.data);
        console.log(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(detail);
  useEffect(() => {
    getDetail(param?.id);
  }, []);

  return (
    <Layout>
      <MainBox>
        <Wrap>
          <ButtonCtn>
            <Buttons onClick={() => navigate(`/chat/${param.id}`)}>
              채팅바로가기
            </Buttons>
          </ButtonCtn>
          <ContentBox top={10} fontSize={30}>
            {" "}
            {detail?.title}
          </ContentBox>
          <ContentBox top={20}>장소 : {detail?.location}</ContentBox>
          <ContentBox top={30}>날짜 : {detail?.date}</ContentBox>
          {/* <ContentBox top={80}> {time}</ContentBox> */}
          <ContentBox top={40}>
            인원:
            {detail?.partySize}
          </ContentBox>
        </Wrap>
      </MainBox>
    </Layout>
  );
};

export default Detail;

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
const ContentBox = styled.div<ContentBoxProps>`
  /* background-color: ivory; */
  height: 10%;
  width: 50%;
  font-size: ${(props) => props.fontSize || 18}px;
  text-align: center;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left || 30}%;
  transform: translate(-50%, -50%);
`;
const ButtonCtn = styled.div`
  display: flex;
  justify-content: space-around;
  /* background-color: blue; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5%;
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
