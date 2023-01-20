import axios from "axios";
import { FormValue } from "./pages/SignUp";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_SERVER,
  headers: {
    Authorization: sessionStorage.getItem("accessToken"),
  },
});
///noAuth의 필요가 무엇일까
const instanceNoAuth = axios.create({
  baseURL: process.env.REACT_APP_BACK_SERVER,
});

// 요청 인터셉터 추가
axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
axios.interceptors.response.use(
  function (response) {
    // 응답 데이터를 가공
    // ...
    return response;
  },
  function (error) {
    // 오류 응답을 처리
    // ...
    return Promise.reject(error);
  }
);

export const signUpApi = {
  postSignUp: (userinfo: FormValue) => instance.post("/users/signUp", userinfo),
  DupNick: (userNickname: string) =>
    instanceNoAuth.post("/users/Dup/Nick", userNickname),
  DupId: (userId: string) => instanceNoAuth.post("/users/Dup/Id", userId),
};

export const loginApi = {
  postLogin: (userlogin: string) => instance.post("/users/login", userlogin),
};
