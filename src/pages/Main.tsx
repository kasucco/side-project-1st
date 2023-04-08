import { useRef, useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";
import { postsApi } from "../instance";
import { useInView } from "react-intersection-observer";
import { postCard } from "./SignUp";
import { useNavigate } from "react-router-dom";
export interface getCard extends postCard {
  _id: string;
}
const Main = () => {
  const navigate = useNavigate();
  // 토글 여부를 결정하는 state 선언
  const [toggleBtn, setToggleBtn] = useState<boolean>(true);

  // window 객체에서 scrollY 값을 받아옴
  // 어느정도 스크롤이 된건지 판단 후, 토글 여부 결정
  const handleScroll = () => {
    const { scrollY } = window;

    scrollY > 200 ? setToggleBtn(true) : setToggleBtn(false);
  };

  // scroll 이벤트 발생 시 이를 감지하고 handleScroll 함수를 실행
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //스크롤 맨위로
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const target = useRef(null);
  const [initialItems, setInitialItems] = useState([]);
  const [items, setItems] = useState<getCard[]>([
    {
      _id: "1",
      title: "제목입니다",
      content: "내용입니다1",
      location: "3",
      date: "2022/1/16~2022/1/17",
      time: [new Date(), new Date()],
      map: "stirng",
      partySize: 7,
    },
    {
      _id: "1",
      title: "제목입니다",
      content: "내용입니다2",
      location: "2",
      date: "2022/1/16~2022/1/17",
      time: [new Date(), new Date()],
      map: "stirng",
      partySize: 2,
    },
    // {
    //   _id: "1",
    //   title: "제목입니다",
    //   content: "내용입니다3",
    //   location: "3",
    //   date: "2022/1/16~2022/1/17",
    //   time: [new Date(), new Date()],
    //   map: "stirng",
    //   partySize: 7,
    // },
    // {
    //   _id: "1",
    //   title: "제목입니다",
    //   content: "내용입니다4",
    //   location: "3",
    //   date: "2022/1/16~2022/1/17",
    //   time: [new Date(), new Date()],
    //   map: "stirng",
    //   partySize: 7,
    // },
  ]);

  //? -------------------------- 무한스크롤 -------------------------

  const [hasNextPage, setHasNextPage] = useState(true);
  let page = useRef(0);
  const getData = async () => {
    try {
      const response = await postsApi.getPosts(page.current);
      setItems((prev) => prev.concat(response.data.data));
      setInitialItems((prev) => prev.concat(response.data.data));
      setHasNextPage(response.data.data.length == 5);
      page.current += 5;
    } catch (error) {}
  };

  const { ref, inView } = useInView({
    // 라이브러리 옵션
    //threshold는 ref타겟의 모습이 0~1만큼의 모습이 보이면 inview가 작동하는 값
    threshold: 0.1,
  });
  useEffect(() => {
    //ref타켓이 보이고, 다음페이지가 있으면 데이터get요청
    if (inView && hasNextPage) {
      getData();
    }
  }, [hasNextPage, inView]);
  console.log(items);
  return (
    <Layout>
      <MainBox className="Scroll">
        {/* <MainHeader onClick={() => scrollToTop()}>
          <div className="headtxt">파티모집</div>
        </MainHeader> */}
        {/* <MainListCtn> */}
        {items?.map((item, idx) => {
          return (
            <MainCard key={idx} item={item} setItems={setItems}></MainCard>
          );
        })}
        <div ref={ref}>target? </div> {/* </MainListCtn>{" "} */}
        <FormButton onClick={() => navigate(`/form`)}></FormButton>
      </MainBox>
    </Layout>
  );
};

export default Main;

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

// const MainHeader = styled.div`
//   position: sticky;
//   font-size: 20px;
//   top: 0;
//   width: 100%;
//   background-color: yellow;
//   box-shadow: 0px 0.5px 15px 0.1px red;
//   z-index: 10;
//   color: white;
//   padding: 2% 5%;
//   min-height: 7%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .locationBtn {
//     :hover {
//       cursor: pointer;
//     }
//   }
//   .headtxt {
//     font-size: 20px;
//     font-weight: 600;
//     color: #fff;
//     text-shadow: 0 0 7px #d90368, 0 0 10px #d90368, 0 0 21px #fff,
//       0 0 42px #d90368, 0 0 82px #d90368, 0 0 92px #d90368, 0 0 102px #d90368,
//       0 0 151px #d90368;
//   }
// `;

// const MainListCtn = styled.div`
//   background-color: pink;
//   height: 100%;
//   width: 100%;
//   padding: 3% 6% 0 6%;
//   overflow-y: hidden;
//   overflow-y: scroll;
// `;
const FormButton = styled.button`
  position: fixed;
  bottom: 10%;
  left: 62%;
  background-color: purple;
  border: none;
  color: white;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  :hover {
    cursor: pointer;
  }
`;
