import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import MainLayout from './layouts/MainLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import Home from './pages/main/Home'

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route path='auth/login' element={<Login />} />
                <Route path='auth/register' element={<Register />} />

                <Route path='' element={<ProtectedLayout />}>
                    <Route path='' element={<Home />} />
                </Route>
            </Route>
        </Routes>
    )
}
