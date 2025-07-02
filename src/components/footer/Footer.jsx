import { Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='w-full bg-[#232323] text-gray-300 p-5'>
            <div className='container mx-auto flex items-center justify-between'>
                <h4 className='text-sm'>
                    Made with ❤️ by Sankalp Pimpalkar
                </h4>

                <div className='flex items-center gap-5'>
                    <p className='text-sm'>
                        Follow me on
                    </p>

                    <div className='flex items-center gap-2'>
                        <a href="https://www.instagram.com/shhaanky/" target='_blank'>
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
