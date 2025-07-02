import React, { useState, useTransition } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../store/slices/auth.slice'
import authService from '../../appwrite/auth'
import { InputComponent } from '../../components/ui'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { ContactRound, Lock, Mail } from 'lucide-react'
import ButtonComponent from '../../components/ui/ButtonComponent'

export default function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [isError, setIsError] = useState("")
    const [isPendingUserRegister, startUserRegisterTransition] = useTransition()

    function handleRegister(data) {
        setIsError("")
        try {
            startUserRegisterTransition(async () => {
                const session = await authService.createAccount(data)

                if (session) {
                    const userInfo = await authService.getCurrentUser()

                    if (userInfo) {
                        dispatch(login(userInfo))
                        navigate('/')
                    }
                }
            })
        } catch (error) {
            setIsError(error.message)
        }
    }

    return (
        <div className='w-full min-h-[80vh] flex justify-center'>
            <div className='bg-[#191919] rounded-md gap-3 p-5 w-full max-w-md h-fit'>
                <h3 className='font-semibold text-2xl text-gray-200'>
                    Create Account
                </h3>

                <p className='text-sm text-gray-400 font-medium mt-1'>
                    Already have an existing account ?
                    <Link
                        className='font-semibold text-gray-100 ml-1'
                        to={'/auth/login'}
                    >
                        Login
                    </Link>
                </p>

                <form className='mt-4 space-y-2' onSubmit={handleSubmit(handleRegister)}>
                    <InputComponent
                        icon={<ContactRound size={20} className="stroke-[1.5] text-[#808080]" />}
                        placeholder="Enter Name"
                        {
                        ...register("name",
                            {
                                required: true,
                            }
                        )
                        }
                    />

                    <InputComponent
                        icon={<Mail size={20} className="stroke-[1.5] text-[#808080]" />}
                        placeholder="Enter Email"
                        {
                        ...register("email",
                            {
                                required: true,
                                validate: {
                                    matchPattern: (value) => /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value) || "Enter a valid email address"
                                }
                            })}
                    />

                    <InputComponent
                        icon={<Lock size={20} className="stroke-[1.5] text-[#808080]" />}
                        placeholder="Enter Password"
                        {
                        ...register("password",
                            {
                                required: true,
                                min: 8
                            }
                        )
                        }
                    />

                    <ButtonComponent
                        className='mt-4'
                        isLoading={isPendingUserRegister}
                    >
                        Create
                    </ButtonComponent>
                </form>

                {
                    isError.trim() && (
                        <p className='text-xs mt-4 text-red-400 font-medium'>
                            *{isError.trim()}
                        </p>
                    )
                }
            </div>
        </div>
    )
}
