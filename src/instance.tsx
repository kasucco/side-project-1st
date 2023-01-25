import axios, { AxiosError, AxiosHeaders } from "axios";
import { config } from "process";
import { formatDiagnosticsWithColorAndContext } from "typescript";
import { userState } from "./pages/Login";
import { FormValue, postCard } from "./pages/SignUp";

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
    const token = sessionStorage.getItem("accessToken");
    // config.headers!.Authorization = token;
    if (config.headers)
      (config.headers as AxiosHeaders).set("Authorization", `${token}`);
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
  async (error) => {
    console.log(error);
    const {
      config,
      response: { data },
    } = error;
    const prevRequest = config;
    console.log(config);
    if (data.code === 419) {
      try {
        const { data } = await axios.post(
          `${process.env.REACT_APP_BACK_SERVER}/users/refresh`,
          {
            refresh_token: sessionStorage.getItem("refreshToken"),
          }
        );
        console.log(data);
        sessionStorage.setItem("accessToken", `Bearer ${data.accessToken}`);
        prevRequest.headers = {
          "Content-type": "application/json",
          Authorization: `Bearer ${data.accessToken}`,
        };
        return await axios(prevRequest);
      } catch (err) {
        // console.log(error);
        // if (err.response.data.code === 420) {
        //   alert("로그인을 다시 해주세요");
        //   window.location.replace("/");
        // }
        // new Error(err);
      }
    }
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
  postLogin: (userlogin: userState) => instance.post("/users/login", userlogin),
};

export const postsApi = {
  getPosts: (payload: number) => {
    return instance.get(`/posts/?skip=${payload}`);
  },
  getDetailId: (payload: string) => instance.get(`/posts/${payload}`),
  createPost: (inputs: postCard) => {
    return instance.post(`/posts`, inputs);
  },
  // putPost: (inputs) => {
  //   return instance.put(`/posts/${inputs.postId}`, inputs.postPayload.data);
  // },
  // deletePost: (params) => instance.delete(`/posts/${params}`),
  // updatePost: (payload) =>
  //   instance.patch(`/posts/${payload.postId}`, payload.post),
};
