import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const SongDetail = (props) => {
  // useParams()
  // : URI 에서 전송된 파라메터를 객체로 읽는다.
  // : 리턴된 결과 비구조화 한다.
  // : value 는 문자열로 온다.
  const { id } = useParams();  
  // useNavigate() : 강제로 화면 이동
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";
  // 혹시 id를 이상한 값으로 전달했을 때
  // 어떻게 할지 처리
  useEffect( () => {
    // props.songs 배열에서 useParams 의 id를 비교
    const result = props.songs.find( (item) => {
      // 목록의 id는 숫자 
      // useParmas() 결과의 id는 문자열
      return item.id === parseInt(id ? id : "", 10);
    });

    if(result) {
      setTitle(result.title ? result.title : "No Title");
      setMusician(result.musician ? result.musician : "No Musician");
      setLink(result.youtube_link ? YOUTUBE_LINK + result.youtube_link : "");
    } else {
      navigate("/songs")
    }

  }, []);

  return (
  <div className="mt-5">
    <h2>{title}</h2>
    <p>Original Musician : {musician}</p>
    <p>
      <a href={link} target="_blank">
        View Youtube
      </a>
    </p>
    <Link to ="/songs">Return Song List</Link>
  </div>
  )
}

export default SongDetail