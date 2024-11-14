export const getUser = async (email: string, password: string) => {
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:8000/api/profile/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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
