import React from 'react'
import { Link, Outlet, useMatch } from 'react-router-dom';

const Songlist = (props) => {
  // 경로의 패턴을 비교
  const pathMatch = useMatch("/songs/:id");
  let pathMatchId = -1;
  if(pathMatch) {
    pathMatchId = pathMatch.params.id ? parseInt(pathMatch.params.id): -1;
  }
  // pathMatch.params : 파라메터
  // pathMatch.pathname : 요청경로
  // pathMatch.pathnameBase : 주소창
  // pathMatch.pattern : 패턴출력                       

  const list = props.songs.map( (item) => {
    return (
      <li key={item.id}  className={item.id === pathMatchId ? "list-group-item list-group-item-secondary" : "list-group-item"}>
        <Link to={`/songs/${item.id}`} style={{textDecoration:"none"}}>
          {item.title} ({item.musician})

          <span className="float-end badge bg-danger">
            <i class="bi bi-youtube"></i>
          </span>

        </Link>
      </li>
    )
  });
  return (
    <div className="card card-body">
      <h2>Songlist</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  )
}

export default Songlist