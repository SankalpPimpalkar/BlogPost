import React, { useEffect, useTransition } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { login, logout } from '../store/slices/auth.slice'
import { Header, Footer, Container } from '../components'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

    const [isPendingUserInfo, startUserInfoTransition] = useTransition()
    const dispatch = useDispatch()

    useEffect(() => {
        startUserInfoTransition(async () => {
            const userData = await authService.getCurrentUser();

            if (userData) {
                dispatch(login(userData))
            }
            else {
                dispatch(logout())
            }
        })
    }, [])

    return (
        <div className='w-full min-h-dvh text-gray-600 relative'>
            <Header />
            <Container>
                {
                    isPendingUserInfo ?
                        (
                            <div>
                                Loading...
                            </div>
                        ) :
                        (
                            <Outlet />
                        )
                }
            </Container>
            <Footer />
        </div>
    )
}
