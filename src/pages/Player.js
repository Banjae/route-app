import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';

const Player = (props) => {
  // URI 파라메터 처리
  const params = useParams();
  // 강제화면전환
  const navigate = useNavigate();
  // state 데이터
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  // 데이터가 존재하는지 useEffect()
  useEffect( () => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const song = props.songs.find( (item) => item.id === id );
    if(song) {
      setTitle(song.title ? song.title : "No Title")
      setLink(song.youtube_link ? song.youtube_link : "")
    } else {
      navigate("/songs")
    }
  });

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link to = "/songs" className="menu">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">{title}</span>
        </div>
        <div className="player">
          <div>
            <YouTube videoId={link}  
                  opts={{
                  width: "320",
                  height: "240",
                  playerVars: { autoplay: 1 },
                }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player