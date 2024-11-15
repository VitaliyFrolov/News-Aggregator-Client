import { getUser } from '@/entities/user';
import { logout } from '@/features/auth/api';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = async () => {
    const user = await getUser();

    return (
        <header className='flex justify-between items-center p-4 mb-2'>
            <div>
                logo
            </div>
            <button onClick={logout}>
                Выйти
            </button>
            <div className='cursor-pointer'>
                {user.email ? (
                    <span>{user.email}</span>
                ) : (
                    <Link href={'/auth/signin'}>
                        Войти в аккаунт
                    </Link>
                )}
            </div>
        </header>
    );
};