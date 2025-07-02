import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { useSelector } from "react-redux"
import { logout } from "../../store/slices/auth.slice"
import { Link, useLocation } from "react-router-dom"

const NAVIGATIONS_PROTECTED = [
    {
        id: 1,
        name: 'Add Posts',
        slug: '/posts/add'
    },
    {
        id: 2,
        name: 'Profile',
        slug: '/profile'
    },
]

const NAVIGATIONS_AUTH = [
    {
        id: 1,
        name: 'Register',
        slug: '/auth/register'
    },
    {
        id: 2,
        name: 'Login',
        slug: '/auth/login'
    },
]

export default function Navigation() {

    const dispatch = useDispatch()
    const isloggedIn = useSelector(state => state.auth.status)
    const location = useLocation()

    async function handleLogout() {
        const isLoggedOut = await authService.logout()

        if (isLoggedOut) {
            dispatch(logout())
        }
    }

    if (!isloggedIn) {
        return (
            <div className="flex items-center gap-5">
                {
                    NAVIGATIONS_AUTH.map(nav => (
                        <Link
                            key={nav.id}
                            to={nav.slug}
                            className={`font-medium text-sm ${location.pathname == nav.slug ? 'text-gray-100' : 'text-gray-400'}`}
                        >
                            {nav.name}
                        </Link>
                    ))
                }
            </div>
        )
    }

    return (
        <div className="flex items-center gap-5">
            {
                NAVIGATIONS_PROTECTED.map(nav => (
                    <Link
                        key={nav.id}
                        to={nav.slug}
                        className={`font-medium text-sm ${location.pathname == nav.slug ? 'text-gray-100' : 'text-gray-400'}`}
                    >
                        {nav.name}
                    </Link>
                ))
            }
            <button
                className="font-medium text-sm text-red-400 active:text-red-600 cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}
