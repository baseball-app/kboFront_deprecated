// api.js

import axios from 'axios';

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: 'http://choi1994.synology.me:8000/', 
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// 회원가입 요청 
export const register = async (email, password, nickname, phone, myteam) => {
  try {
    const response = await apiClient.post('/users/signup/', {
      email,
      password,
      nickname,
      phone,
      myteam,
    });
    return response.data;
  } catch (error) {
    console.error("회원가입 오류:", error);
    throw error;
  }
};

// 로그인 요청 api

// id: signup@testing.four
// pw: rjwlks
export const login = async (email, password) => {
    try {
        // email과 password를 그대로 사용하여 POST 요청 보냄
        const response = await apiClient.post('/users/login/', { 
            email: email, 
            password: password 
        });
        console.log('Login response:', response); // 응답 로깅
        return response; // 응답 객체 전체 반환
    } catch (error) {
        console.error("로그인 오류:", error);
        if (error.response) {
            console.error('Error data:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error setting up request:', error.message);
        }
        throw error;
    }
};


// 이메일 중복 체크 
export const checkEmail = async (email) => {
  try {
    const response = await apiClient.post('/users/check-email', { email });
    return response.data;
  } catch (error) {
    console.error("이메일 중복 체크 오류:", error);
    throw error;
  }
};

// 비밀번호 
export const submitPassword = async (password) => {
  try {
    const response = await apiClient.post('/users/password', { password });
    return response.data;
  } catch (error) {
    console.error("비밀번호 제출 오류:", error);
    throw error;
  }
};

// 닉네임 
export const submitNickname = async (nickname) => {
  try {
    const response = await apiClient.post('/users/nickname', { nickname });
    return response.data;
  } catch (error) {
    console.error("닉네임 제출 오류:", error);
    throw error;
  }
};

// 선호 팀 
export const submitFavoriteTeam = async (team) => {
  try {
    const response = await apiClient.post('/users/favorite-team', { team });
    return response.data;
  } catch (error) {
    console.error("선호 팀 제출 오류:", error);
    throw error;
  }
};

export default apiClient;
