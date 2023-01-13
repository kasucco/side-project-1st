import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { postCard } from "../pages/Main";

type itemProps = {
  item: postCard;
  setItems: Dispatch<SetStateAction<postCard[] | null>>;
};

const MainCard = ({ item, setItems }: itemProps) => {
  const {
    title,
    content,
    location,
    cafe,
    date,
    time,
    // map,
    partyMember,
  } = item;
  return (
    <Wrap>
      {title},{content},{location},{cafe},{date},{time},{partyMember},
    </Wrap>
  );
};

export default MainCard;

const Wrap = styled.div`
  height: 10%;
  background-color: #e4ccff;
  width: 90%;
  margin: 5% 5% 5% 5%;
  display: flex;
  border-radius: 5%;
  justify-content: center;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
  :hover {
    box-shadow: 0px 0px 0px 0px;
  }
`;
