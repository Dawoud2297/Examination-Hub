import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Header = (props) => {
  const { setAuthSignUp, header, imageHeight, imageWidth, title } = props;
  const navigate = useNavigate();

  const register = () => {
    navigate('/signup');
    setAuthSignUp('signup');
  }

  const login = () => {
    setAuthSignUp('login');
  }
  return (
    <div className={header.headerContainer}>
      <div className={header.logo}>
        <img src='assets/al-azhar.png' height={imageHeight} width={imageWidth} alt='' />
      </div>
      <div className={header.title}>
        <p>
          {title}
        </p>
      </div>
      <div className={header.login}>
        <Link to="/auth/login" onClick={login} className={header.link}>Log In</Link>
        <button onClick={register}>Sign Up</button>
      </div>
    </div>
  )
}

export default Header