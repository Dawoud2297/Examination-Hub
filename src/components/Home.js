import React, { useEffect } from 'react'
import Header from './Header'
import About from './About'
import home from '../Styles/Home.module.css'
import Footer from './Footer'
import { useDispatch } from 'react-redux'
import { selectAuthType } from '../store/auth'



const Home = () => {
  const dispatch = useDispatch();
  
  const setAuthSignUp = (type) => {
    dispatch(selectAuthType(type))
  }

  let stillExistsEx = localStorage.getItem("__expiredTime");
  
  useEffect(() => {
    if (stillExistsEx) localStorage.removeItem("__expiredTime");
  }, [stillExistsEx])

  return (
    <div className={home.homeContainer}>
      <Header setAuthSignUp={setAuthSignUp} />
      <About setAuthSignUp={setAuthSignUp} />
      <Footer />
    </div>
  )
}

export default Home