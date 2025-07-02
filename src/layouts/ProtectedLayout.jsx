import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedLayout() {

    const isAuthenticated = useSelector(state => state.auth.status)
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth/login')
        }
    }, [isAuthenticated, navigate])

    return (
        <Outlet />
    )
}
