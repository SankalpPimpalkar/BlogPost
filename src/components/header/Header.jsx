import { Link } from "react-router-dom"
import Navigation from "./Navigation"

export default function Header() {

    return (
        <div className='w-full bg-[#232323] text-gray-300 p-4 sticky top-0 z-50'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link to={'/'} className="text-lg font-semibold text-gray-100">
                    BlogPost
                </Link>

                <Navigation />
            </div>
        </div>
    )
}
