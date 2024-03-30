import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children, isAdmin }) {
    // const { isAuthenticated, loading } = useSelector(state => state.authState)
    const userName = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

    if (!userName) {
        return <Navigate to="/" />
    }
    if (userName) {
        return children;
    }

    // if (loading) {
    //     return <Loader />
    // }

}