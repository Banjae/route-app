import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heding">
        <h2 className="text-center m-3">My Playlist</h2>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success menu" to="/">Home</Link>
            <Link className="btn btn-success menu" to="/about">About</Link>
            <Link className="btn btn-success menu" to="/members">Members</Link>
            <Link className="btn btn-success menu" to="/songs">Songlist</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header