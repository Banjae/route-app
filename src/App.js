import React, { useEffect, useState } from 'react'
// Axios API
import instance from "./api/axios"
import requests from "./api/request"
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Songlist from './pages/Songlist'
import { BrowserRouter as Router, Routes, Route, Await } from "react-router-dom";
import Player from './pages/Player'
import PlayerIndex from './pages/PlayerIndex'

const App = () => {

  // 멤버목록 데이터
  // useState 는 state가 변경되면 실행되는 Hook
  // useState() 를 실행하면  [] 리터이 된다
  // 배열은 [state, state업데이트함수] 를 돌려받는다
  // 배열은 [getter, setter] 를 돌려받는다
  // useState(초기값) : state의 초기값
  const [members, setMembers] = useState([]);

  // 플레이리스트 State
  // 화면을 갱신할 수 있는 조건은 state / props 변경
  const [songs, setSongs] = useState([]);
  // 외부데이터 가져오기
  const fetchData = async () => {
    // 멤버 목록 가져오기
    const resultMember = await instance.get(requests.fetchMember);
    setMembers (resultMember.data);
    // 곡 목록 가져오기
    const resultSong = await instance.get(requests.fetchSong);
    setSongs (resultSong.data)
  }

  useEffect( () => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About title="Singer" />} />
          <Route path = "/members" element={<Members members={members} />} />
          <Route path = "/songs" element={<Songlist songs={songs} />} >
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App