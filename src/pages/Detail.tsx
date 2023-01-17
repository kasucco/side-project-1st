import Layout from "../common/Layout";
import styled from "styled-components";

const Detail = () => {
  return (
    <Layout>
      <MainBox>
        <Wrap></Wrap>
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
