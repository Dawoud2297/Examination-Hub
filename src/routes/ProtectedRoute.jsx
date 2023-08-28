import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import logoutUser from '../components/Logout';
import IdleTimer from '../components/Session/IdleTimer';

const ProtectedRoute = () => {
  const { keepUserLoggedIn } = useSelector((state) => state.auth)

  /** */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!keepUserLoggedIn) {
      const importedLogout = () => {
        logoutUser(dispatch, navigate);
      }
      const timer = new IdleTimer({
        timeout: 60 * 10,
        onTimeout: () => {
          importedLogout();
        },
        onExpired: () => {
          importedLogout();
        }
      })
      return () => {
        timer.cleanUp();
      }
    }
  }, [dispatch, keepUserLoggedIn, navigate])
  /** */

  useEffect(()=>{
    document.body.dir = "ltr";
    document.title = "Examinations Hub"
  },[])

  let user_token = JSON.parse(localStorage.getItem('additional'))?.additional?.user_token;
  let localUserPath = JSON.parse(localStorage.getItem('dashboard-sub-path'));
  if (!user_token || !localUserPath) {
    return <Navigate to="/" />
  }
  return (
    <Outlet />
  )
}

export default ProtectedRoute