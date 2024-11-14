'use client'
import { paths } from '@/app/routing';
import { login } from '@/features/auth';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const SigninForm = () => {
    const [ passwordVisibility, setPasswordVisibility ] = useState(false);

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
        login(data.email, data.password).then((res) => {
            console.log(res)
        });
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label
    
            >
                Адрес электронной почты<span>*</span>
            </label>
            <div>
                <input
                    
                    {...register('email', {
                        required: 'Введите адрес электронной почты',
                        maxLength: 50
                    })}
                />
                {errors.email ? (
                    <div>
                        {errors.email.message}
                    </div>
                ): null}
            </div>
            <label
                
            >
                Пароль<span>*</span>
            </label>
            <div>
                <div> 
                    <input
                       
                        type={passwordVisibility ? 'text' : 'password'}
                        {...register('password', {
                            required: 'Введите пароль',
                            maxLength: 50
                        })}
                    />
                    <button
                        
                        type="button"
                        onClick={togglePasswordVisibility}
                    ></button>
                </div>
            </div>
            <button
                type='submit'
            >
                Продолжить
            </button>
            <Link
                href={paths.signup}
            >
                Не удается войти в<br />
                стистему?
            </Link>
        </form>
    );
};