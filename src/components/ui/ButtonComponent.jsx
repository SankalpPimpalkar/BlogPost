import { LoaderCircle } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export default function ButtonComponent({ isLoading = false, type = "submit", className = "", children, ...props }) {
    return (
        <button
            disabled={isLoading}
            type={type}
            className={twMerge('flex items-center justify-center gap-2 bg-blue-500 border border-blue-400 text-white font-medium text-center w-full p-2 text-sm rounded-md cursor-pointer disabled:bg-blue-600', className)}
            {...props}
        >
            {
                isLoading && (
                    <LoaderCircle size={18} className='animate-spin stroke-3' />
                )
            }
            {children}
        </button>
    )
}
