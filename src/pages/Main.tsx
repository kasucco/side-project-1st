import { useRef, useState } from "react";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import { useEffect } from "react";
import Layout from "../common/Layout";

export interface postCard {
  title: string;
  content: string;
  location: string;
  date: string;
  time: string;
  partyMember: number;
}

const Main = () => {
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

  const [items, setItems] = useState<postCard[] | null>([
    {
      title: "제목입니다",
      content: "내용입니다1",
      location: "3",
      date: "2022/1/16~2022/1/17",
      time: "15:00~16:00",
      partyMember: 7,
    },
    {
      title: "제목입니다",
      content: "내용입니다2",
      location: "2",
      date: "2022/1/16~2022/1/17",
      time: "15:00~16:00",
      partyMember: 2,
    },
    {
      title: "제목입니다",
      content: "내용입니다3",
      location: "3",
      date: "2022/1/16~2022/1/17",
      time: "15:00~16:00",
      partyMember: 7,
    },
    {
      title: "제목입니다",
      content: "내용입니다4",
      location: "3",
      date: "2022/1/16~2022/1/17",
      time: "15:00~16:00",
      partyMember: 7,
    },
  ]);
  // const slideRef = useRef();
  // const [count, setCount] = useState(1);
  // const [slideList, setSlideList] = useState<object[] | undefined>([]);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setCount(() =>{
  //       if (count < slideList.length) {
  //       return setCount(count + 1);
  //       } else {
  //       return  setCount(1);
  //       }
  //     });

  //     handleSlider(count);

  //     return () => clearTimeout(interval);
  //   }, 6000);
  // });

  // const handleSlider = (count: number) => {
  //   if (count === 5) {
  //     slideRef.current.style.transform = "translateX(0)";
  //   } else {
  //     slideRef.current.style.transform = `translateX(-${
  //       window.innerWidth * count
  //     }px)`;
  //   }
  // };

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
        {/* <Target ref={ref}>target? </Target>{" "} */}
        {/* </MainListCtn>{" "} */}
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
