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

    console.log(data)
};

export const register = async (email: string, password: string) => {
    const response = await fetch('http://localhost:8000/api/user/', {
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

    localStorage.setItem('token', data.token);
    localStorage.setItem('user', data.user.email);
};