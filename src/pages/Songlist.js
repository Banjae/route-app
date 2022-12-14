import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Songlist = (props) => {
  const list = props.songs.map( (item) => {
    return (
      <li key={item.id} className="list-group-item">
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