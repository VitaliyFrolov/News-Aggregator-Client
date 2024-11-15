'use client'
import { paths } from '@/app/routing';
import { register as userRegister } from '@/features/auth';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SignupForm: FC = () => {
    const [ passwordVisibility, setPasswordVisibility ] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const togglePasswordVisibility = () => {
        setPasswordVisibility(!passwordVisibility);
    };

    const onSubmit = (data: {email: string, password: string}) => {
        console.log(data)
        userRegister(data.email, data.password).then((user) => {
            if (user) {
                router.push('/')
            }
        });
    };
    
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
            <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>
                    Адрес электронной почты <span className='text-red-500'>*</span>
                </label>
                <input
                    id='email'
                    type='email'
                    {...register('email', {
                        required: 'Введите адрес электронной почты',
                        maxLength: 50
                    })}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' // Tailwind styles
                />
                {errors.email && (
                    <div className='text-red-500 text-xs italic'>{errors.email.message}</div>
                )}
            </div>
            <div className='mb-4'>
                <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
                    Пароль ! <span className='text-red-500'>*</span>
                </label>
                <div className='relative'>
                    <input
                        id='password'
                        type={passwordVisibility ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Введите пароль',
                            maxLength: 50
                        })}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' // Tailwind styles
                    />
                    <button
                        type='button'
                        onClick={togglePasswordVisibility}
                        className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600'
                    >
                        {passwordVisibility ? <span>Hide</span> : <span>Show</span>}
                    </button>
                    {errors.password && (
                        <div className='text-red-500 text-xs italic'>{errors.password.message}</div>
                    )}
                </div>
            </div>
            <div className='mb-6'>
                <button
                    type='submit'
                    className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' // Tailwind styles
                >
                    Продолжить
                </button>
            </div>
            <div className='text-center'>
                <Link
                    href={paths.signin}
                    className='text-sm text-blue-500 hover:underline'
                >
                    У вас уже есть аккаунт?
                </Link>
            </div>
        </form>
    );
};