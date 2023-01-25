import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCard } from "../pages/Main";

type itemProps = {
  item: getCard;
  setItems: Dispatch<SetStateAction<getCard[]>>;
};

const MainCard = ({ item, setItems }: itemProps) => {
  const navigaete = useNavigate();
  const { _id, title, content, location, date, time, partySize } = item;
  return (
    <Wrap onClick={() => navigaete(`/detail/${_id}`, {})}>
      <ContentBox top={10} fontSize={30}>
        {" "}
        {title}
      </ContentBox>
      <ContentBox top={40}>장소 : {location}</ContentBox>
      <ContentBox top={60}>날짜 : {date}</ContentBox>
      {/* <ContentBox top={80}> {time}</ContentBox> */}
      <ContentBox top={80}>
        인원:
        {partySize}
      </ContentBox>
    </Wrap>
  );
};

export default MainCard;

const Wrap = styled.div`
  height: 10%;
  background-color: #e4ccff;
  width: 90%;
  margin: 5% 5% 5% 5%;
  /* display: flex; */
  position: relative;
  border-radius: 5%;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  :hover {
    box-shadow: 0px 0px 0px 0px;
  }
`;

interface ContentBoxProps {
  top: number;
  left?: number;
  fontSize?: number;
}
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
