import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="ui top fixed inverted menu">
      <Link to="/" className="item">
        <h2 className="ui header white">
          <i className='user secret icon'/>
          <div className="content"> Auth App </div>
          <div className="sub header white">You need a crime (identity theft), a detective (you), and the solution (this app).</div>
        </h2>
      </Link>
      <div className="right menu">
          {props.currentUser.id ? (
          <React.Fragment>
          <h5 className='item'>Welcome {props.currentUser.username}</h5>
          <a className="item">
            <div className="ui button" onClick={props.handleLogout}>
              Logout
            </div>
          </a>
          </React.Fragment>
        ) : null }
      </div>
    </div>
  );
};

export default NavBar
