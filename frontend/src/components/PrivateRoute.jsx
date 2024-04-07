
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
export const PrivateRoute = ({children}) => {
    const {login} = useSelector(state => state)
    return login.isAuth ? children : <Navigate to="/login"/>
}

