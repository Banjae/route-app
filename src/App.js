import React, { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Members from './pages/Members'
import Songlist from './pages/Songlist'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Player from './pages/Player'
import PlayerIndex from './pages/PlayerIndex'

const App = () => {

  // 멤버목록 데이터
  // useState 는 state가 변경되면 실행되는 Hook
  // useState() 를 실행하면  [] 리터이 된다
  // 배열은 [state, state업데이트함수] 를 돌려받는다
  // 배열은 [getter, setter] 를 돌려받는다
  // useState(초기값) : state의 초기값
  const [members] = useState([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" }
  ]);

  // 플레이리스트 State
  // 화면을 갱신할 수 있는 조건은 state / props 변경
  const [songs] = useState([
    { id: 1, title: "Bye bye my blue", musician: "Yerin Baek", youtube_link: "WbhK3wMXluE" },
    { id: 2, title: "Cheek To Cheek", musician: "meenoi", youtube_link: "L40aZzsO61E" },
    { id: 3, title: "Drama", musician: "IU", youtube_link: "AkugjXUj5sM" },
    { id: 4, title: "I got lucky", musician: "Jinah Kwon", youtube_link: "oiBswnuvv80" },
    { id: 5, title: "Event Horizon", musician: "YounHa", youtube_link: "73V3xrfiYMo" },
    { id: 6, title: "Shouldn’t Have..", musician: "Ayeon Baek", youtube_link: "x815A21RIto" },
    { id: 7, title: "WINE", musician: "Suran", youtube_link: "MHmKx-QFIr4" },
    { id: 8, title: "Shiny Star", musician: "KyoungSeo", youtube_link: "NuTNPV72rFo" },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element={<About title="인디밴드" />} />
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