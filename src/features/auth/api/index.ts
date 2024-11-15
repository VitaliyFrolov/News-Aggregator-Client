'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const login = async (email: string, password: string) => {
    const response = await fetch('http://localhost:8000/api/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    };

    const data = await response.json();

    (await cookies()).set('token', data.token, { httpOnly: true });
    return data;
};

export const register = async (email: string, password: string) => {
    const response = await fetch('http://localhost:8000/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
    });

    if (!response.ok) {
        throw new Error(`Ошибка запроса: ${response.status}`);
    };

    const data = await response.json();
    (await cookies()).set('token', data.token, { httpOnly: true });
    return data;
};

export const logout = async () => {
    try {
        const cookieStore = cookies();
        (await cookieStore).delete('token',);
        return redirect('/auth/signin')
    } catch (error) {
        console.error('Ошибка при выходе:', error);
    }
};
  