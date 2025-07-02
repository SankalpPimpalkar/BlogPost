import databaseService from '../../appwrite/db'
import { Link } from 'react-router-dom'

export default function PostCardComponent({ id, title, featuredImage }) {

    return (
        <Link to={`/posts/${id}`} className='bg-[#232323] rounded-md space-y-3 p-3 w-full max-w-xs inline-block'>
            <img
                className='rounded-md w-full'
                src={
                    databaseService.getFilePreview(featuredImage)
                }
                alt={title}
            />

            <h3 className='text-lg font-semibold text-gray-200'>
                This is a random Blog
            </h3>
        </Link>
    )
}
