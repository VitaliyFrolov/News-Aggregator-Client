'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getUser = async () => {
    try {
        const token = (await cookies()).get('token')?.value;

        if (!token) {
            return redirect('/auth/signin')
        }

        const response = await fetch('http://localhost:8000/api/auth/profile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Ошибка доступа');
            } else {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
        throw error;
    }
};