import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const About = (props) => {
  // useSearchParams : ?a=1&b=2 query문자열 읽고 쓰기
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage ] = useState(1);
  // useNavigate Hook 은 navigate() 를 리턴
  const navigate = useNavigate();
  
  // 컴포넌트가 마운트 또는 언마운트 또는 업데이트 체크용 훅
  // dependency Array : 의존하는 배열 
  // 1. [] 없으면 매번 업데이트
  // 2. [] 만 있으면 마운트or언마운트 될떄만 작동
  // 3. [a, b] 로 작성시, a or b 가 변할 떄 작동  
  useEffect( () => {
    // useSearchParams() 리턴 결과를 이용해서 query 읽음
    // ?page=1
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);

  const goPrev = () => {
    if(page>1) {
      navigate(window.location.pathname + "?page=" + (page-1));
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + "?page=" + (page+1));
  };

  return (
    <div className="card card-body">
      <h2>About {props.title} </h2>
      <div>
        <div className="m-2">현재 페이지 : {page}</div>
        <button className="btn btn-secondary m-1" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-secondary m-1" onClick={goNext}>
          Next
        </button>
      </div>
    </div>
  )
}

export default About