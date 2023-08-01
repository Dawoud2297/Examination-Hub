import { logout } from '../store/auth';
import { setIdentity } from '../store/identity';
import { logoutDashboard } from '../store/examsTypes';


const logoutUser = (dispatch, navigate) => {
    localStorage.removeItem("__expiredTime")
    dispatch(logout());
    dispatch(setIdentity(''));
    dispatch(logoutDashboard())
    navigate('/');
}

export default logoutUser